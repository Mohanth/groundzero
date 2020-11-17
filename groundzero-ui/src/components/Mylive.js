import React from 'react';
import '../live.css';

class Live extends React.Component {

  render() {
    console.log(this.props.myCourses);
    return this.props.myCourses.map(courses => {
      return (
        <div style={{paddingLeft:"2rem",paddingRight:"5rem"}} >
          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-heading">
                <li style={{ textDecoration: 'none' }}
                    className="list-group-item  d-flex justify-content-between align-items-center panel-title" id="list-home-list"
                    data-toggle="collapse"
                    href={'#collapse' + courses.courseId} >{courses.courseName}<span
                    className="badge badge-primary badge-pill">inprogress</span></li>
              </div>
              <div id={'collapse' + courses.courseId} className="panel-collapse collapse">
                {/*<table class="table table-striped">
                  <tbody>
                    <tr>
                      <th style={{textAlign:"justify"}}>One</th>
                    </tr>
                    <tr>
                      <th style={{textAlign:"justify",backgroundColor:"#dee2e6"}}>Two</th>
                    </tr>
                    <tr>
                      <th style={{textAlign:"justify"}}>Two</th>
                    </tr>
                  </tbody>
                </table>*/}
                {/*<div style={{padding:"1.6rem,2.4rem",borderTop:"1px solid #dcda",}}>
                  <ul style={{listStyle:"none",margin:0,padding:0}}>
                    <div style={{paddingLeft:"1rem",paddingTop:".5rem"}}>
                      <li style={{textAlign:"justify",marginBottom:".2rem"}}>
                        <div>
                          <span>One </span>
                        </div>
                      </li>
                      <li style={{textAlign:"justify"}}>
                        <div>
                          <span>One </span>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>*/}
                <ul className="list-group" style={{textAlign:'justify'}}>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Cras justo odio</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Dapibus ac facilisis in</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Morbi leo risus</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Porta ac consectetur ac</li>
                  <li className="list-group-item" style={{backgroundColor: "#dee2e6 ",border: "none"}}>Vestibulum at eros</li>
                </ul>

                {/*<ul className="list-group">
                  <a href="#"><li className="list-group-item">One</li></a>
                  <li className="list-group-item">Two</li>
                  <li className="list-group-item">Three</li>
                </ul>*/}
              </div>
            </div>
          </div>
        </div>
      );
    });

  }
}

export default Live;
