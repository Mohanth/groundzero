import React from "react";
import img from "../resources/Pink_Transparent_200 (1).png";
import background from "../resources/FullLogo_Black (1).png";
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

const intialstate={
    username: '',
    userfirstname: '',
    userlastname: '',
    userphone: '',
    useremail: '',
    userpassword: '',
    nameerror:'',
    passworderror: '',
    emailerror:'',
    phoneerror:''
}
const intialfacultystate={
  facultyname:'',
  facultyfirstname:'',
  facultylastname:'',
  facultyemail:'',
  facultyphone:'',
  facultypassword:'',
  preferredsubject:'',
  nameerror:'',
  passworderror: '',
  emailerror:'',
  phoneerror:''
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

      nameerror:'',
      passworderror:'',
      emailerror:'',
      phoneerror:''
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
  validatefaculty=()=>{
    let nameerror='';
    let passworderror='';
    let emailerror='';
    let phoneerror='';

    if(!this.state.facultyname)
    {
      nameerror="Required";
    }
    if(!this.state.facultyemail){
      emailerror="Required";
    }
    if(!this.state.facultypassword){
      passworderror="Required";
    }
    if(!this.state.facultyphone)
    {
      phoneerror="Required";
    }

    if(nameerror || emailerror || phoneerror || passworderror )
    {
      this.setState({nameerror,emailerror,phoneerror,passworderror});
      return false;
    }
    return true;

  }
  validate =() => {
    let nameerror='';
    let passworderror='';
    let emailerror='';
    let phoneerror='';

    if(!this.state.username){
      nameerror="Required";
    }
    if(!this.state.useremail ){
          emailerror="Required";
    }
    if(!this.state.userpassword){
          passworderror="Required";
    }
    if(!this.state.userphone)
    {
      phoneerror="Required";
    }

    if(nameerror || emailerror || phoneerror || passworderror )
    {
     this.setState({nameerror,emailerror,phoneerror,passworderror});
      return false;
    }
    return true;

  }

  handlefacultychange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  facultysubmit = (event) => {
    event.preventDefault();
    const isvalid=this.validatefaculty();
    let data = {
      facultyName:this.state.facultyname,
      facultyEmail:this.state.facultyemail,
      facultyPhone:this.state.facultyphone,
      password:this.state.facultypassword
    }
    if(isvalid){
      fetch('http://groundzerolearnings-env.eba-7e4bkbxz.us-east-1.elasticbeanstalk.com/api/faculty/savefaculty', {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!

        headers: {'Content-Type': 'application/json'}
      })

          .then(res => res.json())

          .catch(error => console.error('Error:', error))

          .then(response => console.log('Success:', response));

      this.setState({snackbaropen:true,snackbarmsg:'Stored Successfully'});
      this.setState(intialfacultystate);

    }

  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const isvalid =this.validate();

    let data = {
      userFullName: this.state.username,
      userEmail: this.state.useremail,
      userPhone:this.state.userphone,
      password:this.state.userpassword
    }

    if(isvalid)
    {
    fetch('http://localhost:5000/api/user/saveUser', {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!

        headers: {'Content-Type': 'application/json'}
    })

        .then(res => res.json())

        .catch(error => console.error('Error:', error))

        .then(response => console.log('Success:', response));


    this.setState({snackbaropen:true,snackbarmsg:'Stored Successfully'});
    this.setState(intialstate);

}


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
                <form action="#" method="POST"  id="form" className="sign-in-form" >
                  <img style={{
                     width:"200px",
                    padding:"25px",
                  }} src={img} className="image  d-none d-md-none d-lg-block d-xl-block " alt=""/>
                  <h2 className="title">SIGNUP FOR STUDENTS</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                  </div>
                    <div style={{color:"red",fontSize:"15px"}}>{this.state.nameerror}</div>
                  <div className="input-field">
                    <i className="fas fa-phone"/>
                    <input type="number" name="userphone" value={this.state.userphone} onChange={this.handleChange} placeholder="Phone number"/>
                  </div>
                    <div  style={{color:"red",fontSize:"15px"}}>{this.state.phoneerror}</div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="useremail" value={this.state.useremail} onChange={this.handleChange} placeholder="Email"/>
                  </div>
                    <div  style={{color:"red",fontSize:"15px"}}>{this.state.emailerror}</div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange} placeholder="Password"/>
                  </div>
                    <div style={{color:"red",fontSize:"15px"}}>{this.state.passworderror}</div>
                  <Button style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info" onClick={this.handleSubmit}  >Register</Button>
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
                <form action="#" method="POST" className="sign-up-form">
                  <img style={{
                    width:"200px",
                    padding:"25px",
                  }} src={img} className="image " alt=""/>
                  <h2 className="title">SIGN UP FOR FACULTY</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="facultyname" value={this.state.facultyname} onChange={this.handlefacultychange} placeholder="Name"/>
                  </div>
                  <div style={{color:"red",fontSize:"15px"}}>{this.state.nameerror}</div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="number" name="facultyphone" value={this.state.facultyphone} onChange={this.handlefacultychange} placeholder="Phone number"/>
                  </div>
                  <div style={{color:"red",fontSize:"15px"}}>{this.state.phoneerror}</div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="facultyemail" value={this.state.facultyemail} onChange={this.handlefacultychange} placeholder="Email"/>
                  </div>
                  <div style={{color:"red",fontSize:"15px"}}>{this.state.emailerror}</div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="facultypassword" value={this.state.facultypassword} onChange={this.handlefacultychange} placeholder="Password"/>
                  </div>
                  <div style={{color:"red",fontSize:"15px"}}>{this.state.passworderror}</div>
                  <Button style={{width:"100%",maxWidth:"385px",borderRadius:"55px",height:"45px"}} outline color="info" onClick={this.facultysubmit} >Register</Button>
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
