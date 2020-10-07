import React from "react";
import "../login.css";

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
      preferredsubject:''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlefacultychange = this.handlefacultychange.bind(this)
    this.facultysubmit = this.facultysubmit.bind(this)
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
      facultyId:this.state.facultyid,
      facultyName:this.state.facultyname,
      facultyFirstName:this.state.facultyfirstname,
      facultyLastName:this.state.facultylastname,
      facultyEmail:this.state.facultyemail,
      facultyPhone:this.state.facultyphone,
      preferredSubject:this.state.preferredsubject
    }

    fetch('http://localhost:8080/api/faculty/savefaculty', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!

      headers: {'Content-Type': 'application/json'}
    })

        .then(res => res.json())

        .catch(error => console.error('Error:', error))

        .then(response => console.log('Success:', response));
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
      userId:this.state.userid,
      userFullName: this.state.username,
      userFirstName: this.state.userfirstname,
      userLastname: this.state.userlastname,
      userEmail: this.state.useremail,
      userPhone:this.state.userphone
    }


    fetch('http://localhost:8080/api/user/saveUser', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!

      headers: {'Content-Type': 'application/json'}
    })

        .then(res => res.json())

        .catch(error => console.error('Error:', error))

        .then(response => console.log('Success:', response));
  }

  render() {
    return (
        <div>
          <div className="container-fluid-login">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-sm-none d-xl-block">
              <a className="navbar-brand" href="/">
                GroundZerolearning
              </a>
            </nav>

            <div className="forms-container" >
              <div className="signin-signup">
                <form action="#" method="POST" className="sign-in-form" >
                  <h2 className="title">SIGNUP for students</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="userid" value={this.state.userid} onChange={this.handleChange}
                           placeholder="userid"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}
                           placeholder="Username"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input  type="text" name="userfirstname" value={this.state.userfirstname}
                           onChange={this.handleChange}
                           placeholder="User_Firstname"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="userlastname" value={this.state.userlastname} onChange={this.handleChange}
                           placeholder="Userlastname"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="number" name="userphone" value={this.state.userphone} onChange={this.handleChange}
                           placeholder="phone number"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="useremail" value={this.state.useremail} onChange={this.handleChange}
                           placeholder="Email"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="userpassword" value={this.state.userpassword}
                           onChange={this.handleChange} placeholder="Password"/>
                  </div>
                  <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                  {/*<input onSubmit={this.handleSubmit} type="submit" value="Login" className="button solid"/>*/}
                  <p className="social-text">Or Sign in with social platforms</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"/>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>

                <form action="#" method="POST" className="sign-up-form">
                  <h2 className="title">Sign up for faculty</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="facultyid" value={this.state.facultyid} onChange={this.handlefacultychange}
                           placeholder="userid"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="facultyname" value={this.state.facultyname} onChange={this.handlefacultychange}
                           placeholder="Username"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input  type="text" name="facultyfirstname" value={this.state.facultyfirstname}
                            onChange={this.handlefacultychange}
                            placeholder="User_Firstname"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="facultylastname" value={this.state.facultylastname} onChange={this.handlefacultychange}
                           placeholder="Userlastname"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="number" name="facultyphone" value={this.state.facultyphone} onChange={this.handlefacultychange}
                           placeholder="phone number"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" name="facultyemail" value={this.state.facultyemail} onChange={this.handlefacultychange}
                           placeholder="Email"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"/>
                    <input  type="password" name="userpassword" value={this.state.userpassword}
                            onChange={this.handlefacultychange} placeholder="Password"/>
                  </div>
                  <button onClick={this.facultysubmit} className="btn btn-primary">Login</button>
                  <p className="social-text">Or Sign up with social platforms</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"/>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"/>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"/>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, ex ratione. Aliquid!
                  </p>
                  <button
                      className="button transparent"
                      onClick={script}
                      id="sign-up-btn"
                  >
                    Sign up
                  </button>
                </div>
                <img src="/" className="image" alt=""/>
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>Signup for students </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                  </p>
                  <button
                      className="button transparent"
                      onClick={script}
                      id="sign-in-btn"
                  >
                    Sign up
                  </button>
                </div>
                <img src="Final_logo.png" className="image" alt=""/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Auth;
