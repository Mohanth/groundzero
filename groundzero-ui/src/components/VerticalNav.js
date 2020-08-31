import React from "react";
import userMale from "../resources/icons8-user-male.svg";
//import DisplayDashboardContent from "./DisplayDashboardContent";
import Mylive from "./Mylive";
import DisplayDashboardContent from "./DisplayDashboardContent";

export default class VerticalNav extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="sidebar">
          <h2>sidebar</h2>
          <ul>
            {this.props.panelData.panels.map(function (panel) {
              return (
                <li className="nav-item">
                  <a href={panel.link} className="nav-link px-2">
                    <span>
                      <i class={panel.icon}></i>
                    </span>
                    <span>{panel.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <DisplayDashboardContent />
      </div>
    );
  }
}
