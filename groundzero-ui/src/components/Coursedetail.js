import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import {StyleSheet} from "aphrodite";
import "../coursedetail.css";
import FacultyImg from '../resources/Final_Logo.png'
import Coursename from "../resources/Coursename.json"
import Maindetail from "../resources/Maindetail.json"
import Whatyouwill from "./Whatyouwill";
import Syllabus from "./Syllabus";
import {Route} from "react-router-dom";



const styles = StyleSheet.create({
    con: {
        backgroundColor: "black",
    },
});

class Saii extends React.Component {
    render() {
        return Coursename.name.map((Coursename) =>{
            return (
                <div>
                    <div className="container-fluid d-none d-md-none d-lg-block">
                        <Row>
                            <Col xs={7}>
                                <div className="innerrow">
                                    <h3>{Coursename.title}</h3>
                                    <p>{Coursename.desc}</p>
                                    <span style={{color:"white"}}>Rs.{Coursename.price}</span><br/>
                                    <button className="btn btn-primary">Buy now</button>
                                </div>
                            </Col>
                            <Col xs={5}>
                                <div className="innerrow2">
                                    <img src={FacultyImg} alt={"Faculty"}/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/*MOBILE VIEW*/}

                    <div className='container-fluid  d-block d-sm-block d-md-block d-lg-none d-xl-none'>
                        <div id="mobilefluid">
                            <h3>{Coursename.title}</h3>
                            <p>{Coursename.desc}</p>
                            <button className="btn btn-primary">Buy now</button>
                        </div>
                    </div>
                    <Container className=" instructormobile  d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <img id="imgmobile-instructor" className="rounded-circle"
                             src={FacultyImg} alt={"Faculty"}/>
                        <span className="">Created by Mohanth</span>
                    </Container>
                    {/*END MOBILE VIEW */}
                    <Whatyouwill />
                    <Syllabus />

                </div>
            );

        });




    }
}

export default Saii;
