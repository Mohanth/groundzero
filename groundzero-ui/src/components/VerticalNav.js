import React from "react";
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
                <DisplayDashboardContent/>
            </div>
        );
    }
}
