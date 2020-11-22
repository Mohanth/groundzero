import React from "react";
import {Button} from "reactstrap";


class LandingPageHeader extends React.Component{
    render(){
        return(
            <nav style={{backgroundColor: "black"}} className="navbar navbar-expand-lg navbar-light ">

                <h3 style={{color: "white"}}>GroundZero Learnings</h3>
                <button  className="navbar-toggler" type="button" data-toggle="collapse"
                         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                         aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="navlist" className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a style={{color: "white", marginRight: 10}} className="nav-link"
                               href="/"><i class="fas fa-home" style={{marginRight: 5}}></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color: "white", marginRight: 10}} className="nav-link" href="/courses"><i class="fas fa-book-open" style={{marginRight: 5}}></i>Courses</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color: "white"}} className="nav-link " href="/"
                            ><i class="fas fa-question-circle" style={{marginRight: 5}}></i>About</a>
                        </li>

                        <li style={{textAlign:"center"}} className="nav-item">
                            <a style={{padding:8}} href="/register">
                                <Button className="butt" outline color="info" style={{marginTop: 4}}>Register<i class="fas fa-sign-in-alt" style={{marginLeft: 5}}></i></Button>{' '}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default LandingPageHeader;