import React from "react";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="/courses">
        <h5> Ground Zero Learning</h5>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class=" navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/classes">
              Classes
            </a>
          </li>
          <li class="nav-item">
            <button class="btn btn-primary">Login</button>
          </li>
          <li class="nav-item">
            <span class="glyphicon glyphicon-user"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
