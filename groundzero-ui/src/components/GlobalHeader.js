import * as React from "react";

export default class GlobalHeader extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top ">
            <a class="navbar-brand" href="#"><h5> Ground Zero Learning</h5></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbar">
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Courses</a>
      </li>
      <li class="nav-item">
        <i class="fas fa-user"></i>
      </li>

    </ul>
  </div>
            </nav>
        );
    }
}
