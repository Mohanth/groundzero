import React from "react";
// import {UserDetails} from './UserDetails';
import DashboardContent from "./DashboardContent";

export default class GlobalDashboard extends React.Component {
  render() {
    return (
      <div>
        <DashboardContent userType="student" />
      </div>
    );
  }
}
