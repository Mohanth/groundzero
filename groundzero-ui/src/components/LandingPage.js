import React from 'react';
import faculty01 from '../resources/images/faculty_1.jpg';
import faculty02 from '../resources/images/faculty_2.jpg';
import faculty03 from '../resources/images/faculty_3.jpg';
import faculty04 from '../resources/images/faculty_4.jpg';
import groupClasses from '../resources/images/group-classes.jpg';
import assesments from '../resources/images/weekly_assesments.jpg';
import doubts from '../resources/images/students-doubts.jpg';
import support from '../resources/images/online_support.jpg';
import shapeFuture from '../resources/images/shape-your-future.png';
import progress from '../resources/images/students-progress.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../landingpage.css';
import Head from './LandingPageHeader';
import Footer from './LandingPageFooter';


AOS.init({offset: 200, duration: 1000});

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>

                <Head />

                <section className="shapeyourfuture">
                    <div className="row">
                        <div className="future-item">
                            <div className="col-3 col-md-4">
                                <h1 className={"merriwetherFont"} style={{fontWeight: 800}}>Shape Your Future <br />With Us</h1>
                                <p>
                                We provide personalized one-one mentoring for students. We will help you achieve your dreams.
                                </p>
                                <div class="row" style={{justifyContent: 'center', marginTop: 20}}>
                                    <div style={{marginRight: 20}}>
                                        <input type="text" class="form-control signup-textbox" placeholder="Enter phone no. / email" aria-label="Enter phone no. / email" aria-describedby="basic-addon2" style={{color: 'white'}}></input>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-light signup-btn" ><i class="fas fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                

                                
                            </div>
                            <div className="col-3 col-md-4">
                                <div className="img-container">
                                    <img src={shapeFuture} alt="img" className="future-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="achieveyourgoals">
                    <div>
                        <h2 className="achieve-title merriwetherFont">Get the GroundZero Learning's Advantage</h2>
                    </div>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center'}}>
                        <div className="card" >
                            <img src={groupClasses} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                
                                <p className="card-text">Group classes with personalized care for students</p>
                                
                            </div>
                        </div>
                        <div className="card" >
                            <img src={assesments} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                
                                <p className="card-text">Weekely assesments to monitor performance of students</p>
                                
                            </div>
                        </div>
                        <div className="card" >
                            <img src={doubts} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                
                                <p className="card-text">Dedicated doubt solving sessions for students</p>
                                
                            </div>
                        </div>
                        <div className="card" >
                            <img src={support} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                
                                <p className="card-text">24/7 technical support for students</p>
                                
                            </div>
                        </div>
                    </div>

                </section>
                <section className="accomplish">
                    <div>
                    <h2 className="accomplish-title merriwetherFont">What you accomplish through GroundZero</h2>
                    </div>
                    <div className="accomplish-content">
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="col-3">
                                <p style={{marginTop: '100px'}}>
                                    Courses that mainly focus on strengthing the student's basics , hence creating a strong foundation for them.
                                </p>
                            </div>
                            <div className="col-3">
                                <div className="img-container">
                                    <img src={progress} alt="img" style={{width: '95%',height: '95%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="blog">
                    
                </section>
                <section className="instructor-class" data-aos="fade-right">
                    <div>
                        <h2 className="instructor-title merriwetherFont">Meet our experts team</h2>
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="instructor">
                                <img src={faculty01} style={{width: '240px'}}/>
                                <div className="container" >
                                    <h3 className="instructor-name">Samanth</h3>
                                    <p>Some text</p>
                                </div>
                            </div>
                            <div className="instructor">
                                <img src={faculty02} style={{width: '240px'}}/>
                                <div className="container" >
                                    <h3 className="instructor-name">Purnesh</h3>
                                    <p>Some text</p>
                                </div>
                            </div>
                            <div className="instructor">
                                <img src={faculty03} style={{width: '240px'}}/>
                                <div className="container" >
                                    <h3 className="instructor-name">Mohanth</h3>
                                    <p>Some text</p>
                                </div>
                            </div>
                            <div className="instructor">
                                <img src={faculty04} style={{width: '240px'}}/>
                                <div className="container" >
                                    <h3 className="instructor-name">Keerthana</h3>
                                    <p>Some text</p>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </section>

                <section data-aos="fade-left" className="testimonial">
                    <div className="contain contain-small">
                        <h3 style={{fontWeight: 700, color: "#1f1f1f"}} className="text-center merriwetherFont">Testimonials</h3>
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
                                                        "Learning directly from mentor is a bliss. The classrooms were
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