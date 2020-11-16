import * as React from "react";
import firebaseDb from "./Firebaseconfig"
import image from "../resources/Final_Logo.png";
import store from "store";

class DisplayDashboardContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        }
        this.razorpay=this.razorpay.bind(this)
    }

    razorpay =(e,data) =>{

        var options = {
            "key": "rzp_test_3etUd9HgxlWZ1o", // Enter the Key ID generated from the Dashboard
            "amount": data.courseprice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": data.coursename,
            "courseid":data.courseid,
            "description": "Payment",
            "image":{image},
            "handler": function (response){
                let details= {
                    /*paymentid:response.razorpay_payment_id,*/
                    courseName:data.coursename,
                    courseId:data.courseid,
                    user_id:this.props.info.userId,
                    orderAmount:data.courseprice
                }

                fetch('http://localhost:5000/api/user/saveUserCourses', {
                    method: 'POST',
                    body: JSON.stringify(details), // data can be `string` or {object}!
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then((resp) => {
                        resp.json()
                        })
                    .catch(error => console.log(error));
                /*firebaseDb.child("paymentid").push(info)
                console.log(info)*/
            },

            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#F37254"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
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
    buynow(data){
        console.log(data.coursename)
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
                                <button style={{marginRight:"100px"}}  onClick={e => this.razorpay(e,data)}  className="btn btn-primary">Buy now</button>
                                <span style={{marginTop:"10px"}}><p>Rs.{data.courseprice}</p></span>
                            </div>
                        </div>
                    </div>
                );
            })
        }



}

export default DisplayDashboardContent;
