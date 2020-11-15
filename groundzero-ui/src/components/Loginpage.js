import React from 'react';
import img from '../resources/Pink_Transparent_200 (1).png';
import { Button } from 'reactstrap';
import '../login.css';
import Dashboard from "./Dashboard";
import Redirect from "react-router-dom";

function script() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-fluid-login");
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
}

export default class Loginauth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            useremail:'',
            password:'',
            userinfo:''
        }
        this.handlechange.bind(this)
        this.handlesubmit.bind(this)

    }
    handlechange =(e) =>{
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit =(e) =>{
        e.preventDefault()
        let data={
            userEmail:this.state.useremail,
            password:this.state.password
        }
        console.log(data);
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {'Content-Type': 'application/json'}
        })
        .then((resp) => {
            resp.json().then((data) =>{
                console.log(data.userDetails);
                this.setState({userinfo: data})
                console.log(this.state.userinfo)
            })
        })
    .catch(error => console.log(error))

       if(this.state.userinfo!=null){
         return <link  to="/dash" />
       }
       else{
           alert("Details not found")
       }

    }

    render(){
        return(
            <div>
                <div style={{backgroundColor:""}} className="container-fluid-login">
                    <div className="forms-container" >
                        <div className="signin-signup">
                            <form action="#" method="POST" className="sign-in-form" onSubmit={this.handlesubmit} >
                                <img style={{
                                    width:"200px",
                                    padding:"25px",
                                }} src={img} className="image  d-none d-md-none d-lg-block d-xl-block " alt=""/>
                                <h2 className="title">Login FOR STUDENTS</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"/>
                                    <input type="text" onChange={this.handlechange} name="useremail" value={this.state.useremail}  placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"/>
                                    <input  type="password" name="password"  onChange={this.handlechange}  value={this.state.password} placeholder="Password"/>
                                </div>

                                <Button type="submit" style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info" >Login</Button>
                                <p style={{marginBottom:0}} className="social-text">Or Sign in with social platforms</p>
                                <div style={{display: "flex"}} className="social">
                                    <a href="https://www.facebook.com/GZLearnings/">
                                        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://www.instagram.com/groundzerolearnings/" >
                                        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://g.page/groundzero-learnings/review?rc">
                                        <img src="https://img.icons8.com/color/48/000000/google-plus-squared.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://www.linkedin.com/company/groundzero-learnings">
                                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="social-icon"/>
                                    </a>
                                </div>
                            </form>
                            <form  method="POST" className="sign-up-form">
                                <img style={{
                                    width:"200px",
                                    padding:"25px",
                                }} src={img} className="image " alt=""/>
                                <h2 className="title">SIGN UP FOR FACULTY</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"/>
                                    <input type="text" name="facultyname"  placeholder="Name"/>
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"/>
                                    <input  type="password" name="facultypassword"  placeholder="Password"/>
                                </div>
                                <Button style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info"  >Register</Button>
                                <p style={{marginBottom:0}} className="social-text">Or Sign up with social platforms</p>
                                <div style={{display: "flex"}} className="social">
                                    <a href="https://www.facebook.com/GZLearnings/">
                                        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://www.instagram.com/groundzerolearnings/" >
                                        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://g.page/groundzero-learnings/review?rc">
                                        <img src="https://img.icons8.com/color/48/000000/google-plus-squared.png" alt="social-icon"/>
                                    </a>
                                    <a href="https://www.linkedin.com/company/groundzero-learnings">
                                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="social-icon"/>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Login as faculty</h3>
                                <p>
                                    If you want to Login as a faculty click here
                                </p>
                                <button
                                    className="button transparent"
                                    onClick={script}
                                    id="sign-up-btn"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>Login as students </h3>
                                <p>
                                    If you want to Login as a student click here
                                </p>
                                <button
                                    className="button transparent"
                                    onClick={script}
                                    id="sign-in-btn"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
