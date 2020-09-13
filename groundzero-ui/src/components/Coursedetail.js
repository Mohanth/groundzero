import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import {StyleSheet} from "aphrodite";
import "../coursedetail.css";
import FacultyImg from '../resources/images/mohanthbrothersmall.jpeg'
import Coursename from "../resources/Coursename.json"
import Maindetail from "../resources/Maindetail.json"
import Detail from "./Whatyouwill";
import Syllabus from "./Syllabus";
import {Route} from "react-router-dom";
import User from "../resources/user.json";



const styles = StyleSheet.create({
    con: {
        backgroundColor: "black",
    },
});

class Saii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: Coursename,
        };
    }
    render() {
            return (
                <div>
                    <nav className="navbar navbar-light " id="navbar">
                        <div className="container">
                            <span  className="navbar-brand mb-0 h1">React js </span>
                        </div>
                    </nav>
                    <div className="container-fluid d-none d-md-none d-lg-block">
                        <Row>
                            <Col xs={7}>
                                <div className="innerrow">
                                    <h3 style={{fontFamily:"'Rubik', sans-serif"}}>{this.state.detail.GZ101.details.title}</h3>

                                    <p>{this.state.detail.GZ101.details.desc}</p>

                                    <span style={{color:"white"}}>Rs.{this.state.detail.GZ101.details.price}</span><br/>
                                    <button formAction="/" className="btn btn-primary">Buy now</button>
                                </div>
                            </Col>
                            <Col xs={5}>
                                <div className="card instructor-info" style={{width: 350,marginTop:50,backgroundColor:"black"}}>
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Card image"
                                         style={{width: "auto",padding:10,height:300,textAlign:"right"}} />
                                        <div className="card-body">
                                            <h4 className="card-title" style={{color:"white"}}>{this.state.detail.GZ101.details.instructorObj.instructorName}</h4>
                                            <p className="card-text" >{this.state.detail.GZ101.details.instructorObj.instructorDesignation}</p>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/*MOBILE VIEW*/}

                    <div className='container-fluid  d-block d-sm-block d-md-block d-lg-none d-xl-none'>
                        <div id="mobilefluid">
                            <h3>{this.state.detail.GZ101.details.title}</h3>
                            <p>{this.state.detail.GZ101.details.desc}</p>
                            <span style={{color:"white"}}>Rs.{this.state.detail.GZ101.details.price}</span><br/>
                            <button className="btn btn-primary">Buy now</button>
                        </div>
                    </div>
                    <Container className=" instructormobile  d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <Row>
                            <Col xs={2}>
                                <img id="imgmobile-instructor" className="rounded-circle"
                                     src={FacultyImg} alt={"Faculty"}/>
                            </Col>
                            <Col xs={8}>
                                <h5 style={{color:"black",marginLeft:10}}>Mohanth</h5>
                                <span>Working as a React js developer</span>
                            </Col>
                        </Row>
                    </Container>
                    {/* END MOBILE VIEW */}
                    <Detail learn={this.state.detail.GZ101.details.learn}/>
                    <Syllabus syllabus={this.state.detail.GZ101.details.syllabus}/>
                </div>
            );

    }
}

export default Saii;
