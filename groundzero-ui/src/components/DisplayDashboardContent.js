import * as React from "react";
import Courses from "../resources/Courses";

class DisplayDashboardContent extends React.Component {
  render() {
    return Courses.course.map((Courses) => {
      return (
        <div class="main_content">
          <div className="card">
            <img
              className="card-img-top"
              src={Courses.img}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{Courses.title}</h5>
              <p className="card-text">{Courses.desc}</p>
              <a href="#" className="btn btn-primary">
                {Courses.prize}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default DisplayDashboardContent;
