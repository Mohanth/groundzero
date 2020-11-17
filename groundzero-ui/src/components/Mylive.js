import React from 'react';
import '../live.css';

class Live extends React.Component {

  render() {
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
                    href={'#collapse' + courses.courseId} >
                    <i class="fa fa-fw fa-chevron-down" />
                  <i class="fa fa-fw fa-chevron-right" /><span>{courses.courseName}</span>
                    <span className="badge badge-primary badge-pill">inprogress</span>
                </li>
              </div>
              <div id={'collapse' + courses.courseId} className="panel-collapse collapse">
                <ul className="list-group" style={{textAlign:'justify'}}>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Cras justo odio</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Dapibus ac facilisis in</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Morbi leo risus</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Porta ac consectetur ac</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Vestibulum at eros</li>
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
