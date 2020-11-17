import React from "react";

export default class Settings extends React.Component{
    render() {
        return (
            <div>
                <ul className="nav nav-tabs" style={{paddingLeft:"3rem",paddingTop:"2rem"}}>
                    <li className="nav-item">
                        <a className="nav-link " data-toggle="tab" href="#home">User Info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu1">User Orders</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                        <form style={{paddingLeft:"5rem",paddingTop:"2rem",paddingRight:"5rem"}} >
                            <div className="form-group">
                                <dt><label>Name</label></dt>
                                <dd><input className="form-control" placeholder={this.props.info.userFullName}/></dd>
                            </div>
                            <div className="form-group">
                                <dt><label>Email</label></dt>
                                <dd><input className="form-control" placeholder={this.props.info.userEmail}/></dd>
                            </div>
                            <div className="form-group">
                                <dt><label>Phone Number</label></dt>
                                <dd><input className="form-control" placeholder={this.props.info.userPhone}/></dd>
                            </div>
                            <div className="form-group">
                                <dt><label>Coins Avaliable </label></dt>
                                <dd><input className="form-control" placeholder="0" id="disabledTextInput"/></dd>
                            </div>
                        </form>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Some content in menu 1.</p>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                        <h3>Menu 2</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                </div>
            </div>
        );
    }
}