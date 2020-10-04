import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import FacultyImg from "../resources/images/mohanthbrothersmall.jpeg";
import groundzero from "../resources/images/Pink_Transparent_200.png";
import loginpage from "./Loginandsignin";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../landingpage.css";
AOS.init({offset:200,duration:1000});

class landingpage extends React.Component{
    render() {
        return(
            <div>

               <nav style={{backgroundColor:"black"}} className="navbar navbar-expand-lg navbar-light ">
                  {/* <a style={{color:"#ffff"}}><h1>GroundZeroLearning</h1></a>*/}


                   <h3 style={{color:"white",padding:10}}>GroundZeroLearning</h3>
                    <button style={{color:"white"}} className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a style={{color:"white",marginRight:10,marginLeft:10}} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:"white",marginRight:10}} className="nav-link" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:"white"}} className="nav-link " href="#"
                                   >About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/login"> <button style={{boxShadow:"8px 10px 20px 0px rgba(46,61,73,0.15)"}} className="btn btn-primary " type="submit">register</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div  id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <section className="achieveyourgoals">
                    <div>
                        <h2 className="achieve-title">Achieve your goals with groundzero</h2>

                        <ul className="achieve">
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight:55}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=1&w=&h=55" />
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Learn the latest skills "
                                        <small> Like business analytics , graphics design , puthon and more</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight:55}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=1&w=&h=55" />
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Learn the latest skills "
                                        <small> Like business analytics , graphics design , puthon and more</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight:55}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=1&w=&h=55" />
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Learn the latest skills "
                                        <small> Like business analytics , graphics design , puthon and more</small>
                                    </span>
                                </div>
                            </li>
                            <li className="achieve-item">
                                <div className="img-container">
                                    <img style={{maxHeight:55}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=1&w=&h=55" />
                                </div>
                                <div className="achieve-item-title">
                                    <span>
                                        "Learn the latest skills "
                                        <small> Like business analytics , graphics design , puthon and more</small>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="instructor-class" data-aos="fade-right" >
                <div>
                    <h2 className="instructor-title">Instructors we have</h2>
                    <ul className="instructor">
                        <li className="instructor-items">
                            <div className="instructor-img">
                                <img  className="image-instructor rounded-circle mb-3" src={FacultyImg}  alt="no"/>
                            </div>
                            <div className="instructor-name">
                                    <span>MOHANTH</span>
                            </div>
                        </li>
                        <li className="instructor-items">
                            <div className="instructor-img">
                                <img  className="image-instructor rounded-circle mb-3" src={FacultyImg}  alt="no"/>
                            </div>
                            <div className="instructor-name">
                                    <span>MOHANTH</span>
                            </div>
                        </li>
                        <li className="instructor-items">
                            <div className="instructor-img">
                                <img  className="image-instructor rounded-circle mb-3" src={FacultyImg}  alt="no"/>
                            </div>
                            <div className="instructor-name">
                                    <span>MOHANTH</span>
                            </div>
                        </li>
                        <li className="instructor-items">
                            <div className="instructor-img">
                                <img  className="image-instructor rounded-circle mb-3" src={FacultyImg}  alt="no"/>
                            </div>
                            <div className="instructor-name">
                                    <span>MOHANTH</span>
                            </div>
                        </li>
                    </ul>
                </div>
                </section>

                <section data-aos="fade-left" className="testimonial">
                    <div className="contain contain-small">
                        <h3 style={{fontWeight:700,color:"#1f1f1f"}} className="text-center">TESTIMONIALS</h3>
                        <div className="row main-item">
                            <div className="col-md-12">
                                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#quote-carousel" data-slide-to="0" className="active"/>
                                        <li data-target="#quote-carousel" data-slide-to="1" />
                                        <li data-target="#quote-carousel" data-slide-to="2" />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4 className="text-center cookieFont mb-half">
                                                       " Learning directly from mentor is a bliss. The classrooms where always discussion oriented rather than ‘pause and google doubts mode of MOOCs’. The program emphasis on practise of concepts with supervision is what I loved the most."
                                                    </h4>
                                                    <h6 className="mb-1 inline">-mohanth , developer , jpmorgan</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4 className="text-center cookieFont mb-half">
                                                        ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa error facere illo, ipsum magnam nulla quasi rem repellendus similique. Assumenda inventore libero quos rem repellat repellendus saepe sequi voluptas!""
                                                    </h4>
                                                    <h6 className="mb-1 inline">-saii , developer , jpmorgan</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>





                <footer  class="page-footer font-small blue pt-4">
                    <div style={{backgroundColor:"#f3f3f3"}} class="container-fluid text-center  text-md-left">
                        <div class="row" style={{marginLeft:20}}>
                            <div class="col-md-5 mt-md-0 mt-3">
                                <h5  style={{fontSize:20,marginTop:20,font:"bold"}}  class="text-uppercase">GroundZeroLearning</h5>
                                <img style={{width:80,marginBottom:10}} src={groundzero}/>
                                <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut consequatur debitis dolores doloribus eius excepturi fugiat inventore maiores nulla placeat quae quas quis quod, tempora temporibus? Iste, natus.</p>
                            </div>
                            <hr class="clearfix w-100 d-md-none pb-3" />
                                <div class="col-md-3 mb-md-0 mb-3">
                                    <h5 style={{fontSize:20,marginTop:20,font:"bold",fontFamily:"sanserif",color:"black",marginBottom:15}} class="text-uppercase">Location</h5>
                                    <p style={{color:"black"}}><i style={{marginRight:20,color:"black"}} className="fa fa-map-marker"/>hyderabad</p>
                                    <p style={{color:"black"}}><i style={{marginRight:20,color:"black"}} className="fa fa-phone"/>987456321 </p>
                                    <p style={{color:"black"}}><i  style={{marginRight:20,color:"black"}} className="fa fa-envelope"/>groundlearning@gmail.com</p>
                                </div>
                            <hr className="clearfix w-100 d-md-none pb-3"/>
                            <div className="col-md-4 mb-md-0 mb-3">
                                <h5 style={{fontSize: 20, marginTop: 20, font: "bold"}}
                                    className="text-uppercase">Follow Us On</h5>
                                <div style={{display:"flex"}} className="social">
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

                            </div>
                        </div>
                        <div className="footer-copyright text-center py-3">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> Groundzerolearning</a>
                        </div>
                    </div>

                </footer>


            </div>
        );
    }
}

export default landingpage;