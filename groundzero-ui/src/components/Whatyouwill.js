import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import {StyleSheet} from "aphrodite";
import "../coursedetail.css";
import Maindetail from "../resources/Maindetail.json"

class Detail extends React.Component{
    render() {
        return Maindetail.main.map((Maindetail) =>{
            return(
            <div>
                <Container className="detail" style={{backgroundColor: "#fbfbf8", marginTop: 20}}>
                    <div style={{padding: 20}}>
                        <h3>{Maindetail.heading}</h3>
                        <ul>
                            <li>Concept</li>
                            <li>Concept</li>
                            <li>Concept</li>
                            <li>Concept</li>
                            <li>Concept</li>
                        </ul>
                    </div>
                </Container>
            </div>
            );


        });
    }
}
export default Detail;