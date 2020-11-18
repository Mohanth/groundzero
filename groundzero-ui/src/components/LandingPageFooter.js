import React from "react";
import groundZeroLogo from "../resources/images/Pink_Transparent_200.png";
import facebook from "../resources/images/facebook.svg";
import './landingpagefooter.css';
class LandingPageFooter extends React.Component{
    render() {
        return (

            <footer className="page-footer font-small blue pt-4">
                <div style={{backgroundColor: "#f3f3f3"}} className="container-fluid text-center  text-md-left">
                    <div className="row" style={{marginLeft: 20}}>
                        <div className="col-md-5 mt-md-0 mt-3">
                            {/* <h5 style={{fontSize: 20, marginTop: 20, font: "bold"}}
                                className="text-uppercase">GroundZeroLearning</h5> */}
                            <img style={{width: 80, marginBottom: 10, marginTop: 10}} src={groundZeroLogo} alt="img"/>
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
                            }} className="text-uppercase" style={{fontWeight: '700', color: '#303030', marginTop: 10}}>Location</h5>
                            <p style={{color: "black"}}><i style={{marginRight: 20, color: "#bf0691"}}
                                                           className="fa fa-map-marker"/>Hyderabad</p>
                            <p style={{color: "black"}}><i style={{marginRight: 20, color: "#bf0691"}}
                                                           className="fa fa-phone-alt"/>9676161442 </p>
                            <p style={{color: "black"}}><i style={{marginRight: 20, color: "#bf0691"}}
                                                           className="fa fa-envelope"/>groundzero.learnings@gmail.com
                            </p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <h5 style={{
                                fontSize: 20,
                                marginTop: 20,
                                font: "bold",
                                fontFamily: "sanserif",
                                color: "black",
                                marginBottom: 15
                            }} className="text-uppercase" style={{fontWeight: 700, marginTop: 10}}>Quick Links</h5>
                            <p><a href="#" style={{color: 'black'}}>About Us</a></p>
                            <p><a href="https://www.groundzero.guru/register" style={{color: 'black'}}>Register</a></p>
                            <p><a href="https://www.groundzero.guru/login" style={{color: 'black'}}>Login as Student</a></p>
                            

                            
                        </div>

                        {/* <div className="col-md-4 mb-md-0 mb-3">
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

                        </div> */}
                        
                    </div>
                    <div className="social-links text-center py-2" >
                        <a href="https://www.facebook.com/GZLearnings/"><img src={facebook} className="icons" style={{width:'40px',height:'40px', marginRight: '5px'}}></img></a>
                        <a href="https://www.instagram.com/groundzerolearnings/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" className="icons" style={{marginRight: '5px'}}></img></a>
                        <a href="https://g.page/groundzero-learnings/review?rc"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111453.svg" className="icons" style={{width: '40px', height: '40px', marginRight: '5px'}}></img></a>
                        <a href="https://www.linkedin.com/company/groundzero-learnings"><img src="https://img.icons8.com/color/48/000000/linkedin.png"  className="icons"></img></a>
                    </div>
                    <div className="footer-copyright text-center py-3">Copyright
                        GroundZero Learnings Pvt Ltd.&nbsp;© 2020. All Rights Reserved
                    </div>
                </div>

            </footer>
        );
    }
}

export default LandingPageFooter;