import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            toggleEdit: false,
        };

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
            <div className="grid-item item1">
                {!this.state.toggleEdit ? (
                    <div className="general">
                        <form onSubmit={this.submitForm}>
                            <label className="form-label" htmlFor="name"  > Name: </label>
                            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} required/>
                            <br/>
                            <label className="form-label" htmlFor="surname"  > Surname: </label>
                            <input type="text" name="surname" onChange={this.handleChange} value={this.state.surname} required/>
                            <br/>
                            <label className="form-label"  htmlFor="mail" > e-mail: </label>
                            <input type="email"  name="email" onChange={this.handleChange} value={this.state.email} required/>
                            <br/>
                            <label className="form-label" htmlFor="phone" > Phone number: </label>
                            <input type="phone" name="phone" pattern="[0-9]{9}" onChange={this.handleChange} value={this.state.phone} required/>
                            <br/><br/>
                            <button className="button" type="submit" > <i className="fa fa-plus"></i> </button>
                        </form>
                    </div>
                ) : (

                    <div className="general">
                        <br/>
                        <span> Name: </span> <span className="info">{this.state.name}</span>
                        <br/><br/>
                        <span> Surname: </span> <span className="info">{this.state.surname}</span>
                        <br/><br/>
                        <span> e-mail: </span> <span className="info">{this.state.email}</span>
                        <br/><br/>
                        <span> Phone number: </span> <span className="info">{this.state.phone}</span>
                        <br/><br/><br/>
                        <button className="button" onClick={this.toggle}> <i className="fa fa-edit"></i> </button>
                    </div>
                    
                    
                )

                }
            </div>
        );
    }

}

export default GeneralInfo;