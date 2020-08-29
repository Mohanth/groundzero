import React from 'react';
import DisplayDashboardContent from './DisplayDashboardContent'
import VerticalNav from './VerticalNav';
import StudentDashboardPanels from '../resources/StudentDashboardPanels'

export default class DashboardContent extends React.Component {
    static getDashboardPanelData(userType) {
        switch (userType) {
            case 'student':
                return StudentDashboardPanels;
            default:
                return StudentDashboardPanels;
        }
    }
    panelData = DashboardContent.getDashboardPanelData(this.props.userType);

    render() {
        return (
            <div>
                <h2>{this.panelData.id}</h2>
                <VerticalNav panelData={this.panelData}/>
                <DisplayDashboardContent/>
            </div>
        );
    }


}