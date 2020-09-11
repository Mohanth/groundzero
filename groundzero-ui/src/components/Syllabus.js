import React from "react";
import Syllabus from "../resources/Syllabus.json";
import {Container, Col, Row} from 'react-bootstrap';
import {StyleSheet} from "aphrodite";
import "../coursedetail.css";



class Lesson extends React.Component{
    render() {
        return Syllabus.lessons.map((Syllabus) => {
            return(
                <Container className="syllabus" style={{marginTop: 20}}>
                    <h3>{Syllabus.heading}</h3>
                    <div style={{backgroundColor: "#fbfbf8"}}>
                        <ul className="list-group">
                            <li className="list-group-item" data-toggle="collapse" data-target="#list">Course
                                Contetent
                            </li>

                            <ul className="collapse list-group" id="list" style={{backgroundColor:"#fbfbf8"}}>
                                <li className="list-group-item">Introduction</li>
                                <li className="list-group-item">Concepts</li>
                            </ul>

                            <li className="list-group-item">Course Content</li>
                            <li className="list-group-item">Course Content</li>
                            <li className="list-group-item">Course Content</li>
                            <li className="list-group-item">Course Content</li>
                            <li className="list-group-item">Course Content</li>
                            <li className="list-group-item">Course Content</li>
                        </ul>
                    </div>

                </Container>


            );
        });
    }
}
export default Lesson;