import React from 'react';
import '../live.css';
import syllabus from "../resources/Courses.json";
import store from 'store';

class Live extends React.Component {
    constructor(){
        super();
        this.state ={
            syllabus:syllabus
        }
    }

  render() {
    store.set("userCourses",this.props.myCourses);

    console.log(this.props.myCourses);
    return this.props.myCourses.map(courses => {
      return (
        <div style={{paddingLeft:"2rem",paddingRight:"10rem",paddingTop:".5rem"}} >
          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-heading collapsed">
               <li style={{ textDecoration: 'none' }}
                    className="list-group-item  d-flex justify-content-between align-items-center panel-title ListItem collapsed" id="list-home-list"
                    data-toggle="collapse"
                    href={'#collapse' + courses.courseId}  >
                  {courses.courseName}
                    <span className="badge badge-primary badge-pill">inprogress
                    </span>
                  <i className="fa fa-fw fa-chevron-down"/>
                  <i className="fa fa-fw fa-chevron-left"/>
                </li>
              </div>
              <div id={'collapse' + courses.courseId} className="panel-collapse collapse">
                <ul className="list-group content " style={{textAlign:'justify'}}>
                    {this.state.syllabus.react.syllabus.map((syllabus) =>{
                        return <a href="/video"><li className="list-group-item" ><svg aria-hidden="true" focusable="false" className="svg-icon svg-xsmall video-icon" ><use xlinkHref="#icon-play"><svg id="icon-play" viewBox="0 0 24 24"><path opacity="0.9" d="M 2 12 c 0 5.525 4.475 10 10 10 s 10 -4.475 10 -10 S 17.525 2 12 2 S 2 6.475 2 12 Z m 15 0.114 L 9 16 V 8 l 8 4.114 Z" /></svg></use></svg><span>{syllabus}</span></li></a>
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });

  }
}

export default Live;
