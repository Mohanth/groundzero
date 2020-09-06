import * as React from "react";

export default class GlobalHeader extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="wrapper hover_collapse">
                <div className="top_navbar">
                    <div className="hamburger">
                        <i className="fas fa-bars"/>
                    </div>
                    <div className="logo">GroundZero learnings</div>
                </div>
                <div class="menu"/>
            </div>
        );
    }
}
