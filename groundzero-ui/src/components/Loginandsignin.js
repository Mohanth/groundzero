import React from "react";
import img from "../resources/Pink_Transparent_200 (1).png";
import "../login.css";
import {Button} from "reactstrap";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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


class Auth  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userid:'',
      username: '',
      userfirstname: '',
      userlastname: '',
      userphone: '',
      useremail: '',
      userpassword: '',
      facultyid:'',
      facultyname:'',
      facultyfirstname:'',
      facultylastname:'',
      facultyemail:'',
      facultyphone:'',
      facultypassword:'',
      preferredsubject:'',
      }
    this.state={
      snackbaropen:false,
      snackbarmsg:''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlefacultychange = this.handlefacultychange.bind(this)
    this.facultysubmit = this.facultysubmit.bind(this)
  }

  snackbarClose = (event) => {
    this.setState({snackbaropen:false});
  }

  handlefacultychange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  facultysubmit = (event) => {
    event.preventDefault();

    let data = {
      facultyName:this.state.facultyname,
      facultyEmail:this.state.facultyemail,
      facultyPhone:this.state.facultyphone,
      password:this.state.facultypassword
    }

      fetch('https://groundzerolearnings-env.eba-7e4bkbxz.us-east-1.elasticbeanstalk.com/api/faculty/savefaculty', {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!

        headers: {'Content-Type': 'application/json'}
      })

          .then(res => res.json())

          .catch(error => console.error('Error:', error))

          .then(response => console.log('Success:', response));

      this.setState({snackbaropen:true,snackbarmsg:'Stored Successfully'});
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      userFullName: this.state.username,
      userEmail: this.state.useremail,
      userPhone:this.state.userphone,
      password:this.state.userpassword
    }

      fetch('https://groundzerolearnings-env.eba-7e4bkbxz.us-east-1.elasticbeanstalk.com/api/user/saveUser', {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!

        headers: {'Content-Type': 'application/json'}
      })

          .then(res => res.json())

          .catch(error => console.error('Error:', error))

          .then(response => console.log('Success:', response));


      this.setState({snackbaropen: true, snackbarmsg: 'Stored Successfully'});
  }

  render() {
    return (
        <div>
          <div style={{backgroundColor:""}} className="container-fluid-login">
            <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarClose} message={<span id="message-id" >{this.state.snackbarmsg}</span>} >
              <Alert onClose={this.snackbarClose} severity="success">
                {this.state.snackbarmsg}
              </Alert>
            </Snackbar>
            <div className="forms-container" >
              <div className="signin-signup">
                <form action="#" method="POST"  id="form" className="sign-in-form"  onSubmit={this.handleSubmit}>
                  <img style={{
                     width:"200px",
                    padding:"25px",
                  }} src={img} className="image  d-none d-md-none d-lg-block d-xl-block " alt=""/>
                  <h2 className="title">SIGNUP FOR STUDENTS</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required="required"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-phone"/>
                    <input type="number" name="userphone" value={this.state.userphone} onChange={this.handleChange} placeholder="Phone number" minLength="10" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="useremail" value={this.state.useremail} onChange={this.handleChange} placeholder="Email" required="required"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange} placeholder="Password" required="required"/>
                  </div>
                  <Button type="submit" style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info"  >Register</Button>
                  <p  className="already"><span>Already on Groundzero ? <a style={{padding:8}} href="/login"> Log in</a></span></p>
                  <p style={{marginBottom:0}} className="social-text">Or Sign in with social platforms</p>
                    <div style={{display: "flex",justifyContent:"center"}} className="social">
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


                <form action="#" method="POST" className="sign-up-form" onSubmit={this.facultysubmit}>
                  <img style={{
                    width:"200px",
                    padding:"25px",
                  }} src={img} className="image " alt=""/>
                  <h2 className="title">SIGN UP FOR FACULTY</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="facultyname" value={this.state.facultyname} onChange={this.handlefacultychange} placeholder="Name" required="required"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="number" name="facultyphone" value={this.state.facultyphone} onChange={this.handlefacultychange} placeholder="Phone number" required="required"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="facultyemail" value={this.state.facultyemail} onChange={this.handlefacultychange} placeholder="Email" required="required"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="facultypassword" value={this.state.facultypassword} onChange={this.handlefacultychange} placeholder="Password" required="required"/>
                  </div>
                  <Button style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info"  >Register</Button>
                  <p  className="already"><span>Already on Groundzero ? <a style={{padding:8}} href="/login"> Log in</a></span></p>
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
                  <h3>Signup for faculty</h3>
                  <p>
                    If you want to register as a faculty click here
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
                  <h3>Signup for students </h3>
                  <p>
                   If you want to register as a student click here
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

export default Auth;
