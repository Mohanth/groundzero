import React from 'react';
import userMale from '../resources/icons8-user-male.svg'
import DisplayDashboardContent from "./DisplayDashboardContent";

export default class VerticalNav extends React.Component {
    render() {
        return (
            <div className="wrapper d-flex">
                <div className="sideMenu bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item"><h5>Dashboard</h5></li>
                        {
                            this.props.panelData.panels.map(function (panel) {
                                return (
                                    <li className="nav-item">
                                        <a href={panel.link} className="nav-link px-2">
                                            <span><img alt={""} src={userMale}/></span>
                                            <span>{panel.value}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>

                </div>
                <DisplayDashboardContent/>
            </div>
        );
    }
}