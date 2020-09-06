import React from "react";
import SidebarComponent from "./sidebar/SidebarComponent";
import HeaderComponent from "./header/HeaderComponent";
import {StyleSheet} from 'aphrodite';
import {Column, Row} from 'simple-flexbox';
import '../App.css'
import DisplayDashboardContent from "./DisplayDashboardContent";

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
        padding: 30
    }
});

export default class Dashboard extends React.Component {
    state = {selectedItem: 'Tickets'};

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const {selectedItem} = this.state;
        return (
            <Row className={(styles.container)}>
                <SidebarComponent selectedItem={selectedItem}
                                  onChange={(selectedItem) => this.setState({selectedItem})}/>
                <Column flexGrow={1} className={(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem}/>
                    <div className={(styles.content)}>
                        <DisplayDashboardContent />
                    </div>
                </Column>
            </Row>
        );
    }
}