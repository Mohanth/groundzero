import React from "react";
import FacultyImg from "../resources/mohanthbrothersmall.png";
import groundZeroLogo from "../resources/images/Pink_Transparent_200.png";
import faculty01 from "../resources/images/faculty_01.png";
import humanIcon from "../resources/images/human_01.png";
import vrImg from "../resources/vr.png";
import website_01 from "../resources/website_01_3_500x300.png";
import website_02 from "../resources/Website_02.png";
import groupClasses from "../resources/images/group_classes.png";
import onlineExam from "../resources/images/online_exam.png";
import doubts from "../resources/images/doubts.png";
import support from "../resources/images/support.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../landingpage.css";
import {Button} from "reactstrap";
import Head from "./LandingPageHeader"
import Footer from "./LandingPageFooter"


AOS.init({offset: 200, duration: 1000});

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>

                <Head />

                <div id="carouselExampleIndicators" className="carousel slide d-none d-lg-block d-xl-block"  data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                    </ol>
                    <div className="carousel-inner"  >
                        <div className="carousel-item active">
                            <img  style={{width:"800px",height:"500px",marginLeft:"20%"}} className="" src={website_01} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img style={{width:"800px",height:"500px",marginLeft:"20%"}} className="" src={website_02} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img style={{width:"800px",height:"500px",marginLeft:"20%"}} className="" src={vrImg} alt="First slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide d-block d-sm-block  d-lg-none d-xl-none"  data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                    </ol>
                    <div className="carousel-inner"  >
                        <div className="carousel-item active">
                            <img   className="d-block w-100" src={website_01} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img  className="d-block w-100" src={website_02} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img  className="d-block w-100" src={vrImg} alt="First slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>




                {/*<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner d-none d-md-block d-lg-block d-xl-block">
                        <div className="carousel-item image-container">
                            <img style={{width:"500px"}} className="" src={website_01} alt="First slide"/>
                        </div>
                        <div className="carousel-item image-container">
                            <img style={{width:"50%"}} className="" src={website_02} alt="First slide"/>
                        </div>
                    </div>
                    <div className="carousel-inner 	d-block d-sm-block d-md-none">
                        <div className="carousel-item image-container">
                            <img style={{width:"500px"}} className="" src={vrImg} alt="First slide"/>
                        </div>
                        <div className="carousel-item image-container">
                            <img style={{width:"500px"}} className="" src={website_01} alt="First slide"/>
                        </div>
                        <div className="carousel-item image-container">
                            <img style={{width:"500px"}} className="" src={website_02} alt="First slide"/>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
*/}

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

                <Footer />

            </div>
        );
    }
}

export default LandingPage;