import React from "react";
import  firebaseDb from "./components/Firebaseconfig";

class Add extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            coursename:'',
            courseid:'',
            imgurl:'',
            courseprice:'',
            coursedesc:''
        }
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit =this.handlesubmit.bind(this)
    }

    handlechange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlesubmit = (event) =>{
        event.preventDefault();
        let data={
            coursename:this.state.coursename,
            courseid:this.state.courseid,
            courseprice:this.state.courseprice,
            imgurl:this.state.imgurl,
            coursedesc:this.state.coursedesc
        }
        firebaseDb.child("courses").push(data)
    }
    render() {
        return(
            <div>
                <form action="#" onSubmit={this.handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="courseid">courseid:</label>
                        <input type="courseid" className="form-control" id="courseid" name="courseid" onChange={this.handlechange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="coursename">coursename:</label>
                        <input type="coursename" className="form-control" id="coursename" name="coursename" onChange={this.handlechange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseprice">course price :</label>
                        <input type="courseprice" className="form-control" id="courseprice" name="courseprice" onChange={this.handlechange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="coursedesc">course desc :</label>
                        <input type="coursedesc" className="form-control" id="coursedesc" name="coursedesc" onChange={this.handlechange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgurl">course image url :</label>
                        <input type="imgurl" className="form-control" id="imgurl" name="imgurl" onChange={this.handlechange}/>
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>
        );
    }
}
export default Add;
