import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import {StyleSheet} from "aphrodite";
import "../coursedetail.css";
import Coursename from "../resources/Coursename.json"
import {noAuto} from "@fortawesome/fontawesome-svg-core";


class Detail extends React.Component {
    render() {
            return (
                <Container className="detail" style={{backgroundColor: "#fbfbf8", marginTop: 20, height: "auto"}}>
                    <div style={{padding: 20}}>
                        <h3 style={{fontFamily:"'Rubik', sans-serif"}}>What you will learn</h3>
                        <div style={{marginLeft:10}}>
                            <ul >
                                {Coursename.GZ101.details.learn.map((learn) => {
                                    return <li style={{color: "black", padding: 5,}}>{learn}</li>
                                })}
                            </ul>


                        </div>


                    </div>
                </Container>
            );
    }
}

export default Detail;