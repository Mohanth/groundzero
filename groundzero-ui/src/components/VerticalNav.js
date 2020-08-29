import React from 'react';

export default class VerticalNav extends React.Component {


    render() {
        return (
            <div class="sideMenu bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item"><h5>Dashboard</h5></li>
                    {
                        this.props.panelData.panels.map(function (panel) {
                            return (
                                <li className="nav-item">
                                    <a href="" class="nav-link px-2">
                                        <span>{panel.value}</span>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}