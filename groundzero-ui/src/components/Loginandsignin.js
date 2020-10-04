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
      username: '',
      userfirstname:'',
      userlastname:'',
      userphone: '',
      useremail: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event) {



    const data = {
      username: this.state.username,
      userfirstname:this.state.userfirstname,
      userlastname:this.state.userlastname,
      useremail: this.state.useremail,
      userphone: this.state.userphone,
    }
    console.log(data)

    fetch('/saveUser', {
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-sm-none d-xl-block">
              <a class="navbar-brand" href="#">
                GroundZerolearning
              </a>
            </nav>
            <div className="forms-container" onSubmit={this.handleSubmit}>
              <div className="signin-signup">
                <form action="#" className="sign-in-form">
                  <h2 className="title">SIGNUP</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}
                           placeholder="Username"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" name="userfirstname" value={this.state.userfirstname} onChange={this.handleChange}
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
                    <input type="password" name="userpassword" value={this.state.userpassword}
                           onChange={this.handleChange} placeholder="Password"/>
                  </div>
                  <input type="submit" value="Login" className="button solid"/>
                  <p className="social-text">Or Sign in with social platforms</p>
                  <div className="social-media">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"/>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>

                <form action="#" className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"/>
                    <input type="text" placeholder="Username"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"/>
                    <input type="email" placeholder="Email"/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                  </div>
                  <input type="submit" className="button" value="Sign up"/>
                  <p className="social-text">Or Sign up with social platforms</p>
                  <div className="social-media">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
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
                <img src="img/log.svg" className="image" alt=""/>
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

