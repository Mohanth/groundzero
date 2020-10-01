import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import FacultyImg from "../resources/images/mohanthbrothersmall.jpeg";
import groundzero from "../assets/Transparent_logo.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../landingpage.css";
AOS.init({offset:200,duration:1000});

class landingpage extends React.Component{
    render() {
        return(
            <div>
                <nav>
                    <h2 className="navbar navbar-brand"> GroundZeroLearning</h2>
                </nav>

                <div  id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
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

                <div data-aos="fade-up" id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5 style={{padding:50,textAlign:"center"}}><blockquote>it is normal looking website</blockquote></h5>
                        </div>
                        <div className="carousel-item">
                            <h5 style={{padding:50,textAlign:"center"}}>"It is a very intersting website "</h5>
                        </div>
                        <div className="carousel-item">
                            <h5 style={{padding:50,textAlign:"center"}}>"nice website "</h5>
                        </div>
                        <div className="carousel-item">
                            <h5 style={{padding:50,textAlign:"center"}}>"very useful to all persons"</h5>
                        </div>
                    </div>
                </div>



                <footer  class="page-footer font-small blue pt-4">
                    <div class="container-fluid text-center  text-md-left">
                        <div class="row" style={{marginLeft:20}}>
                            <div class="col-md-5 mt-md-0 mt-3">
                                <h5  style={{fontSize:20,marginTop:20,font:"bold",color:"white",}}  class="text-uppercase">GroundZeroLearning</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut consequatur debitis dolores doloribus eius excepturi fugiat inventore maiores nulla placeat quae quas quis quod, tempora temporibus? Iste, natus.</p>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-3">
                                <div style={{marginTop: 50}} className="social-media">
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
                            <hr class="clearfix w-100 d-md-none pb-3" />
                                <div class="col-md-3 mb-md-0 mb-3">
                                    <h5 style={{fontSize:20,marginTop:20,font:"bold",fontFamily:"sanserif",color:"white",marginBottom:15}} class="text-uppercase">Location</h5>
                                    <p><i style={{marginRight:20}} className="fa fa-map-marker"/>hyderabad</p>
                                    <p><i style={{marginRight:20}} className="fa fa-phone"/>987456321 </p>
                                    <p><i  style={{marginRight:20}} className="fa fa-envelope"/>xyz@gmail.com</p>
                                </div>
                            <hr className="clearfix w-100 d-md-none pb-3"/>

                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> Groundzerolearning</a>
                    </div>
                </footer>


            </div>
        );
    }
}

export default landingpage;