import React from "react";

function Body() {
  return (
    <div class="wrapper d-flex">
      {/* Side nav Start */}
      <div class="sideMenu bg-light">
        <div class="sideMenu bg-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <h5>Dashboard</h5>
            </li>

            <li class="nav-item">
              <a href="/live" class="nav-link px-2">
                <span class="text">My Live Classes</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/chat" class="nav-link px-2">
                <span class="text">My Chat Room</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/courses" class="nav-link px-2">
                <span class="text">My Courses</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Side nav end */}
      <main>
        <div class="container-fluid">
          <div class="card">
            <h5 class="card-header">Courses</h5>
            <div class="card-body">
              <h5 class="card-title">Lorem espon</h5>
              <p class="card-text">
                Content content nconrwenwef vjdsfav jbdsavd hdushfailsdh dsvbads
                dfbvhds uuhaf fau sh.
              </p>
              <a href="/courses" class="btn btn-primary">
                Courses
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Body;
