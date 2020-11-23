
/*
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
}*/

import React from "react";
import "./video.css";
import Courses from "../resources/Courses.json"
function collap(){

    const element1 = document.getElementById("sidebar");
    const element2 = document.getElementById("content")
    element1.classList.toggle("active");
    element2.classList.toggle("active");
}


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
            },
            showCourseNavBar: false,
            content:false,
            syllabus:Courses

        };
    }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Overview</h3>
                    </div>
                    <div className="list-group" id="list-tab" role="tablist">
                        {this.state.syllabus.react.syllabus.map((syllabus) =>{
                            return <a className="" id="list-home-list" data-toggle="list" href="#list-home"
                                      aria-controls="home">{syllabus}</a>
                        })
                        }
                    </div>
                </nav>
                <div id="content">
                    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={collap}>
                                <i className="fas fa-align-left" />
                                <span>Toggle Sidebar</span>
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur, blanditiis deserunt dolores doloribus dolorum ea ex explicabo ipsam libero magnam natus neque optio perferendis quasi qui sed tempore ullam!</p>
                        </div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel"
                             aria-labelledby="list-profile-list">Hey it's me fernado sucre
                        </div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel"
                             aria-labelledby="list-messages-list">Hey it's me lincon
                        </div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel"
                             aria-labelledby="list-settings-list">Hey it's me t-Bag
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
