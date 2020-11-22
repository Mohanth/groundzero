import React from 'react';
import SidebarComponent from './sidebar/SidebarComponent';
import HeaderComponent from './header/HeaderComponent';
import { StyleSheet } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import '../App.css';
import DisplayDashboardContent from './DisplayDashboardContent';
import MyLive from './Mylive';
import Settings from './UserSettings'
import VideoPage from "./VideoPage";
import store from 'store';
import axios from 'axios';
import AnimationLoader from './AnimationLoader';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh'
  },
  content: {
    display: 'relative',
    marginTop: 50
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30,
    marginLeft: 20
  }
});

export default class Dashboard extends React.Component {

  state = { selectedItem: 'Tickets', userResponse: {}, userDetails: {}, userCourses: {}, showAnimation: true };

  componentDidMount() {
    this.getUserDetails();
    window.addEventListener('resize', this.resize);
  }

  async getUserDetails() {
    const userId = store.get('userId');
    let data = await axios.get('http://localhost:5000/api/user/getuserdetails/' + userId)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(data);
    this.setState({ userResponse: data.data });
    this.setState({userDetails:data.data.userDetails})
   this.setState({userCourses:data.data.userOrder})

    console.log(this.state.userDetails)

    this.setState({ showAnimation: false });
    console.log(this.state.userResponse);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();


  getLiveCourses = () => {
    if (this.state.selectedItem === 'myLiveClasses') {
      return <MyLive myCourses={this.state.userCourses} />;
    }
    if (this.state.selectedItem === 'Settings') {
      return <Settings info={this.state.userDetails} /> ;
    }
  };

  courseCatalog = () => {
    if (this.state.selectedItem === 'courseCatalog') {
      return <DisplayDashboardContent info={this.state.userDetails}/>;
    }

  };

  render() {
    const { selectedItem } = this.state;
    return (
      this.state.showAnimation ? <AnimationLoader/> :
        (
          <Row className={styles.container}>
            <SidebarComponent
              selectedItem={selectedItem}
              onChange={(selectedItem) => this.setState({ selectedItem })}
            />
            <Column flexGrow={1} className={styles.mainBlock}>
              <HeaderComponent title={selectedItem} userDetails={this.state.userDetails}/>
              <div className={styles.content}>
                {
                  this.getLiveCourses()
                }
                <div className="row">
                  {
                    this.courseCatalog()
                  }
                </div>
              </div>
            </Column>
          </Row>
        )
    );
  }
}
