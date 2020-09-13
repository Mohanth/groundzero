import React from "react";
import {Container} from 'react-bootstrap';
import "../coursedetail.css";


class Lesson extends React.Component {
    render() {

        return (
            <Container className="syllabus" style={{marginTop: 20}}>
                <h3>Syllabus</h3>
                <div style={{backgroundColor: "#fbfbf8"}}>
                    <ul className="list-display list-checkmarks">
                        {this.props.syllabus.map((syllabus) => {
                            return <li className="list-group-item">{syllabus}</li>
                        })}
                    </ul>
                </div>

            </Container>


        );

    }
}

export default Lesson;