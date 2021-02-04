import React, { Component } from "react";
import "../styles/EducationInfo.css";

class EducationInfo extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            degree: "",
            enrolled: "",
            graduated: "",
            toggleEdit: false,
        }

        this.toggle = this.toggle.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    toggle() {
        this.setState({
            toggleEdit: this.state.toggleEdit ? false : true,
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.toggle();
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value,
        });
    }


    render() {
        return (
            <div className="grid-item item2"> <h5 className="title"> Education </h5>
                {!this.state.toggleEdit ? (
                    <div className="education">
                        <form onSubmit={this.submitForm}>
                            <label className="form-label" htmlFor="school"> School: </label>
                            <input type="text" name="school" onChange={this.handleChange} value={this.state.school} required/>
                            <br/>
                            <label className="form-label" htmlFor="degree"> Degree: </label>
                            <input type="text" name="degree" onChange={this.handleChange} value={this.state.degree} required/>
                            <br/>
                            <label className="form-label" htmlFor="enrolled"> Date enrolled: </label>
                            <input type="date" name="enrolled" onChange={this.handleChange} value={this.state.enrolled} required/> 
                            <br/>
                            <label className="form-label" htmlFor="graduated"> Date graduated: </label>
                            <input type="date" name="graduated" onChange={this.handleChange} value={this.state.graduated} required/> 
                            <br/><br/>
                            <button className="button" type="submit" > <i className="fa fa-plus"></i> </button>
                        </form>
                    </div>
                ) : (
                    <div className="education">
                        <br/>
                        <span> School: </span> <strong>{this.state.school}</strong>
                        <br/><br/>
                        <span> Degree: </span> <strong>{this.state.degree}</strong>
                        <br/><br/>
                        <span> Date: </span> <span className="date">{this.state.enrolled}</span>
                        <br/>                <span className="date">{this.state.graduated}</span>
                        <br/><br/><br/>
                        <button className="button" onClick={this.toggle}> <i className="fa fa-edit"></i> </button>
                    
                    </div>
                )
            }

            </div>
        )
    }
}


export default EducationInfo;