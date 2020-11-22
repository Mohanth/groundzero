/*
import React from 'react';
import { PlyrComponent } from 'plyr-react';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: {
                type: 'video',
                sources: [
                    {
                        src: 'rpF_4dHmZIw',
                        provider: 'youtube'
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="d-none d-sm-block" style={{padding:'1rem'}}>
                <div className="row ">
                    <div className="col-4">
                        <div className="list-group " id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list"
                               data-toggle="list" href="#list-home" role="tab" aria-controls="home">React Js</a>
                            <a className="list-group-item list-group-item-action " id="list-home-list"
                               data-toggle="list" href="#list-intro" role="tab" aria-controls="home">Intro</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <div>
                                    <h3>About React Js and Instrucctor Info</h3>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="list-intro" role="tabpanel" aria-labelledby="list-home-list">
                                <div id={"videoPlayer"}  >
                                    <PlyrComponent sources={this.state.sources}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }
}
*/
import React from 'react';
import { PlyrComponent } from 'plyr-react';
import './video.css';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.hideCourseNav = this.hideCourseNav.bind(this);
    this.state = {
      sources: {
        type: 'video',
        sources: [
          {
            src: 'rpF_4dHmZIw',
            provider: 'youtube'
          }
        ]
      },
      showCourseNavBar: false
    };
  }

  hideCourseNav() {
    this.setState({showCourseNavBar: !this.state.showCourseNavBar});
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.showCourseNavBar ? (<nav id="courseBar">
          <div className="sidebar-header">
            <h3 style={{paddingTop:"2rem"}}><a href="/dashboard" ><i className="fas fa-chevron-circle-left" style={{marginLeft:"10px"}}  data-toggle="tooltip" data-placement="top" title="Back" /></a><span style={{paddingLeft:"2rem"}}>Overview</span></h3>
          </div>
          <ul className="lisst-unstyled components">
            <p>Course Name</p>
            <li className="active">
              <a href="#homeSubmenu">Topics </a>
            </li>
            <li className="active">
              <a href="#homeSubmenu">Topics </a>
            </li>
          </ul>
        </nav>) : <div/>}

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="btn  btn-info" onClick={this.hideCourseNav}>
                <i className="fas fa-align-left"/>
                <span>Overview</span>
              </button>
            </div>
          </nav>
          <br/><br/>
          <div id={'videoPlayer'}>
            <PlyrComponent sources={this.state.sources}/>
          </div>
        </div>
      </div>

    );
  }
}