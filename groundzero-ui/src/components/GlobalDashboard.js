import React from "react";
// import {UserDetails} from './UserDetails';
import DashboardContent from "./DashboardContent";
import GlobalHeader from "./GlobalHeader";

export default class GlobalDashboard extends React.Component {
    componentDidMount(): void {

    }

    render() {
        return (
            <div>
                <GlobalHeader/>
                <DashboardContent userType="student"/>
            </div>
        );
    }
}
