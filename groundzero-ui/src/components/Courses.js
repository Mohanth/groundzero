import React from "react";
import DisplayDashboardContent from "./DisplayDashboardContent";
import Header from "./LandingPageHeader";
import Footer from "./LandingPageFooter"
import "./LandingCourses.css";

class courses extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <img style={{width:"100%",height:"500px"}} src="https://th.bing.com/th/id/OIP.FmMinMviTXkdWQ1osExwwgHaEK?pid=Api&rs=1" />
                </div>
                <div className="transfer_billboard_margin udlite-full-width-container value-props--wrapper--2-saF">
                    <h2 className="udlite-heading-xl value-props--title--1JOa">Why Learn on GroundZero?</h2>
                    <div className="udlite-container iconss">
                        <div className="value-props--item-container">
                            <div className="value-props--icon">
                                <svg aria-hidden="true" focusable="false" className="udlite-icon">
                                    <use xlinkHref="#icon-video">
                                        <svg id="icon-video" viewBox="0 0 24 24">
                                            <path d="M21 3h-18c-1.11 0-2 0.89-2 2v12c0 1.1 0.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-0.9 1.99-2l0.010-12c0-1.11-0.9-2-2-2zM21 17h-18v-12h18v12zM16 11l-7 4v-8l7 4z" />
                                        </svg>
                                    </use>
                                </svg>
                            </div>
                            <div className="value-props--item-content">
                                <h4 style={{fontSize:"16px"}} className="udlite-heading-md  value-props--item-title">
                                    1300,000 online Courses
                                </h4>
                                <p style={{fontSize:"16px"}} className="udlite-text-md">
                                    enjoy a variety of fresh topics
                                </p>
                            </div>
                        </div>
                        <div className="value-props--item-container">
                            <div className="value-props--icon">
                                <svg aria-hidden="true" focusable="false" className="udlite-icon">
                                    <use xlinkHref="#icon-lifetime">
                                        <svg id="icon-lifetime" viewBox="0 0 24 24">
                                            <path d="M18.6 6.62c-1.44 0-2.8 0.56-3.77 1.53l-2.83 2.51-1.52 1.34h0.010l-2.69 2.39c-0.64 0.64-1.49 0.99-2.4 0.99-1.87 0-3.39-1.51-3.39-3.38s1.52-3.38 3.39-3.38c0.91 0 1.76 0.35 2.44 1.030l1.13 1 1.51-1.34-1.26-1.11c-1.020-1.020-2.38-1.58-3.82-1.58-2.98 0-5.4 2.42-5.4 5.38s2.42 5.38 5.4 5.38c1.44 0 2.8-0.56 3.77-1.53l2.83-2.5 0.010 0.010 1.51-1.36h-0.010l2.69-2.39c0.64-0.64 1.49-0.99 2.4-0.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-0.9 0-1.76-0.35-2.44-1.030l-1.14-1.010-1.51 1.34 1.27 1.12c1.020 1.010 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
                                        </svg>
                                    </use>
                                </svg>
                            </div>
                            <div className="value-props--item-content">
                                <h4 style={{fontSize:"16px"}} className="udlite-heading-md  value-props--item-title">
                                    Lifetime access
                                </h4>
                                <p style={{fontSize:"16px"}} className="udlite-text-md">
                                    Learn on your schedule
                                </p>
                            </div>
                        </div>
                        <div className="value-props--item-container">
                            <div className="value-props--icon">
                                <svg aria-hidden="true" focusable="false" className="udlite-icon">
                                    <use xlinkHref="#icon-certificate">
                                        <svg id="icon-certificate" viewBox="0 0 24 24">
                                            <path d="M20.39 19.37l-4.010-1.37-1.38 4-3.080-6-2.92 6-1.38-4-4.010 1.37 2.92-6c-0.96-1.2-1.53-2.72-1.53-4.37 0-1.857 0.737-3.637 2.050-4.95s3.093-2.050 4.95-2.050c1.857 0 3.637 0.738 4.95 2.050s2.050 3.093 2.050 4.95c0 1.65-0.57 3.17-1.53 4.37l2.92 6zM7 9l2.69 1.34-0.19 3 2.5-1.66 2.5 1.65-0.17-2.99 2.67-1.34-2.68-1.35 0.18-2.98-2.5 1.64-2.5-1.66 0.17 3.010-2.67 1.34z" />
                                        </svg>

                                    </use>
                                </svg>
                            </div>
                            <div className="value-props--item-content">
                                <h4 style={{fontSize:"16px"}} className="udlite-heading-md  value-props--item-title">
                                    Expert instruction
                                </h4>
                                <p style={{fontSize:"16px"}} className="udlite-text-md">
                                    Find the right instructor for yoy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headline">
                    <div className="headline-maintext">
                        Courses we offer
                    </div>
                    <div className="headline-subtext">
                        Choose from 130,000 online video courses with new additions published every month
                    </div>
                </div>
            <div className="row main">
            <DisplayDashboardContent/>
            </div>
                <Footer/>
            </div>
        );
    }
}
export default courses;




