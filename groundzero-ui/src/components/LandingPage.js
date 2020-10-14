import React from "react";
import FacultyImg from "../resources/mohanthbrothersmall.png";
import groundZeroLogo from "../resources/images/Pink_Transparent_200.png";
import faculty01 from "../resources/images/faculty_01.png";
import humanIcon from "../resources/images/human_01.png";
import vrImg from "../resources/vr.png";
import groupClasses from "../resources/images/group_classes.png";
import onlineExam from "../resources/images/online_exam.png";
import doubts from "../resources/images/doubts.png";
import support from "../resources/images/support.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../landingpage.css";
import {Button} from "reactstrap";


AOS.init({offset: 200, duration: 1000});

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>

                <nav style={{backgroundColor: "black"}} className="navbar navbar-expand-lg navbar-light ">

                    <h3 style={{color: "white"}}>GroundZero Learnings</h3>
                    <button  className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id="navlist" className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a style={{color: "white", marginRight: 10}} className="nav-link"
                                   href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color: "white", marginRight: 10}} className="nav-link" href="/">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color: "white"}} className="nav-link " href="/"
                                >About</a>
                            </li>
                            <li style={{textAlign:"center"}} className="nav-item">
                                <a style={{padding:8}} href="/login">
                                    <Button outline color="info">Register</Button>{' '}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner d-none d-md-block d-lg-block d-xl-block">
                        <div className="carousel-item image-container">
                            <img className="" src={vrImg} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-inner 	d-block d-sm-block d-md-none">
                        <div className="carousel-item image-container">
                            <img style={{width:"360px"}} className="" src={vrImg} alt="First slide"/>
                        </div>
                    </div>
                    
                    {/*<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>*/}
                </div>


                <section className="achieveyourgoals">
                    <div>
                        <h2 className="achieve-title">Achieve your goals with GroundZero</h2>

                        <ul className="achieve">
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img src={groupClasses} alt="img"/>
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Group Classes"
                                        <small>We also offer group classes for students and personalized care taking</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img src={onlineExam} alt="img"/>
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Weekly Assessment"
                                        <small>Personalized weekly assessment to monitor student performance</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight: 55}} src={doubts} alt="img"/>
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Doubts solving"
                                        <small>We provide dedicated doubt solving for every session</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight: 55}} src={support} alt="img"/>
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "24/7 Support"
                                        <small>We provide 24/7 technical support for students</small>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="instructor-class" data-aos="fade-right">
                    <div>
                        <h2 className="instructor-title">Meet our experts</h2>
                        <ul className="instructor">
                            <li className="instructor-items">
                                <div className="instructor-img">
                                    <img className="image-instructor rounded-circle mb-3" src={FacultyImg} alt="no"/>
                                </div>
                                <div className="instructor-name">
                                    <span>Samanth Varma</span>
                                </div>
                            </li>
                            <li className="instructor-items">
                                <div className="instructor-img">
                                    <img className="image-instructor rounded-circle mb-3" src={humanIcon} alt="no"/>
                                </div>
                                <div className="instructor-name">
                                    <span>Rupesh</span>
                                </div>
                            </li>
                            <li className="instructor-items">
                                <div className="instructor-img">
                                    <img className="image-instructor rounded-circle mb-3" src={faculty01} alt="no"/>
                                </div>
                                <div className="instructor-name">
                                    <span>Keerthana</span>
                                </div>
                            </li>
                            <li className="instructor-items">
                                <div className="instructor-img">
                                    <img className="image-instructor rounded-circle mb-3" src={humanIcon} alt="no"/>
                                </div>
                                <div className="instructor-name">
                                    <span>Mohanth</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section data-aos="fade-left" className="testimonial">
                    <div className="contain contain-small">
                        <h3 style={{fontWeight: 700, color: "#1f1f1f"}} className="text-center">Testimonials</h3>
                        <div className="row main-item">
                            <div className="col-md-12">
                                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#quote-carousel" data-slide-to="0" className="active"/>
                                        <li data-target="#quote-carousel" data-slide-to="1"/>
                                        <li data-target="#quote-carousel" data-slide-to="2"/>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4 className="text-center cookieFont mb-half">
                                                        "Learning directly from mentor is a bliss. The classrooms where
                                                        always discussion oriented rather than ‘pause and google doubts
                                                        mode of MOOCs’. The program emphasis on practise of concepts
                                                        with supervision is what I loved the most."
                                                    </h4>
                                                    <h6 className="mb-1 inline">-Rithesh</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4 className="text-center cookieFont mb-half">
                                                        "Their teaching skills and when ever I have doubts they used to
                                                        be available all the time."
                                                    </h4>
                                                    <h6 className="mb-1 inline">-Mubin</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <footer className="page-footer font-small blue pt-4">
                    <div style={{backgroundColor: "#f3f3f3"}} className="container-fluid text-center  text-md-left">
                        <div className="row" style={{marginLeft: 20}}>
                            <div className="col-md-5 mt-md-0 mt-3">
                                <h5 style={{fontSize: 20, marginTop: 20, font: "bold"}}
                                    className="text-uppercase">GroundZeroLearning</h5>
                                <img style={{width: 80, marginBottom: 10}} src={groundZeroLogo} alt="img"/>
                                <p style={{color: "black"}}>We GroundZero Learnings in a new era of online school. We
                                    provide online classes for all students on MPC, JEE preparation, online coding for
                                    kids. We also provide the One-One mentoring system and group classes</p>
                            </div>
                            <hr className="clearfix w-100 d-md-none pb-3"/>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 style={{
                                    fontSize: 20,
                                    marginTop: 20,
                                    font: "bold",
                                    fontFamily: "sanserif",
                                    color: "black",
                                    marginBottom: 15
                                }} className="text-uppercase">Location</h5>
                                <p style={{color: "black"}}><i style={{marginRight: 20, color: "black"}}
                                                               className="fa fa-map-marker"/>Hyderabad</p>
                                <p style={{color: "black"}}><i style={{marginRight: 20, color: "black"}}
                                                               className="fa fa-phone"/>9676161442 </p>
                                <p style={{color: "black"}}><i style={{marginRight: 20, color: "black"}}
                                                               className="fa fa-envelope"/>groundzero.learnings@gmail.com
                                </p>
                            </div>
                            <hr className="clearfix w-100 d-md-none pb-3"/>
                            <div className="col-md-4 mb-md-0 mb-3">
                                <h5 style={{fontSize: 20, marginTop: 20, font: "bold",textAlign:"center"}}
                                    className="text-uppercase">Follow Us On</h5>
                                <div style={{display: "flex",justifyContent:"center"}} className="social">
                                    <a href="https://www.facebook.com/GZLearnings/">
                                        <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                                    </a>
                                    <a href="https://www.instagram.com/groundzerolearnings/" >
                                        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                                    </a>
                                    <a href="https://g.page/groundzero-learnings/review?rc">
                                        <img src="https://img.icons8.com/color/48/000000/google-plus-squared.png"/>
                                    </a>
                                    <a href="https://www.linkedin.com/company/groundzero-learnings"
                                    >
                                        <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="footer-copyright text-center py-3">© 2020 Copyright:
                            <a href="/"> GroundZero Learnings Pvt Ltd.,</a>
                        </div>
                    </div>

                </footer>


            </div>
        );
    }
}

export default LandingPage;