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

    render() {
        return (
            <div>
                <VerticalNav/>
                <DisplayDashboardContent panels={DashboardContent.getDashboardPanelData(this.props.userType)}/>
            </div>
        );
    }


}