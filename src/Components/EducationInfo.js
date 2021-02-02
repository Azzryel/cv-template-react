import React, { Component } from "react";

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
            <div>
                {!this.state.toggleEdit ? (
                    <div>
                        <form onSubmit={this.submitForm}>
                            <label className="form-label" htmlFor="school"> School: </label>
                            <input type="text" name="school" onChange={this.handleChange} value={this.state.school}/>
                            <br/>
                            <label className="form-label" htmlFor="degree"> Degree: </label>
                            <input type="text" name="degree" onChange={this.handleChange} value={this.state.degree} />
                            <br/>
                            <label className="form-label" htmlFor="enrolled"> Date enrolled: </label>
                            <input type="date" name="enrolled" onChange={this.handleChange} value={this.state.enrolled} /> 
                            <br/>
                            <label className="form-label" htmlFor="graduated"> Date graduated: </label>
                            <input type="date" name="graduated" onChange={this.handleChange} value={this.state.graduated} /> 
                            <br/><br/>
                            <button type="submit" > <i className="fa fa-plus"></i> </button>
                        </form>
                    </div>
                ) : (
                    <div>
                    
                        <span> School: </span> <strong>{this.state.school}</strong>
                        <br/>
                        <span> Degree: </span> <strong>{this.state.degree}</strong>
                        <br/>
                        <span> Date: </span> <span>{this.state.enrolled}</span>
                        <span>  -  </span> <span>{this.state.graduated}</span>
                        <br/><br/>
                        <button onClick={this.toggle}> <i className="fa fa-edit"></i> </button>
                    
                    </div>
                )
            }

            </div>
        )
    }
}


export default EducationInfo;