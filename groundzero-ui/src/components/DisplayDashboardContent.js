import * as React from "react";
import Courses from "../resources/Courses";

const Data = Courses.course.map((Courses) => {
  return (
    <div class="card">
      <img class="card-img-top" src="..." alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">{Courses.title}</h5>
        <p class="card-text">{Courses.desc}</p>
        <a href="#" class="btn btn-primary">
          {Courses.prize}
        </a>
      </div>
    </div>
  );
});

export default Data;
