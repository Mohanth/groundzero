import * as React from "react";
import firebaseDb from "./Firebaseconfig"

class DisplayDashboardContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        firebaseDb.child("courses").on("value", snapshot => {
            let courses = [];
            snapshot.forEach(snap => {
                courses.push(snap.val());
            });
            this.setState({courses: courses});
        });

    }

    render() {
        return  this.state.courses.map(data => {
                return (
                    <div className="card caard">
                        <img style={{height:"214px"}}
                            className="card-img-top"
                            src={data.imgurl}
                            alt="course image"
                        />
                        <div className="card-body">
                            <h3 className="card-title">{data.coursename}</h3>
                            <a href="/login" >Detail</a>
                            <p className="card-text" style={{color:"black"}}>{data.coursedesc}</p>
                            <div style={{display:"flex"}}>
                                <button style={{marginRight:"100px"}} className="btn btn-primary">Buy now</button>
                                <span style={{marginTop:"10px"}}><p>Rs.{data.courseprice}</p></span>
                            </div>
                        </div>
                    </div>
                );
            })
        }



}

export default DisplayDashboardContent;
