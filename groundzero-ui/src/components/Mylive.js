import React from "react";
import "../live.css";

class  Live extends React.Component {

    render(){
        return (
            <div style={{marginLeft:"15px", width:"1000px"}}>
                <div>
                    <div className="list-group" id="list-tab" role="tablist">
                        <li style={{textDecoration:"none"}} className="list-group-item  d-flex justify-content-between align-items-center" id="list-home-list" data-toggle="list"
                            href="#list-home" role="tab" aria-controls="home">{this.props.userinfo.userDetails.userId} <span className="badge badge-primary badge-pill">inprogress</span></li>
                    </div>
                </div>
                <div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade " id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list">
                            <ul className="list-group">
                                <a href="/"><li className="list-group-item">
                                    infra
                                </li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Live;
