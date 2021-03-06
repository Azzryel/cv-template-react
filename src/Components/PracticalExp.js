import React, { Component } from "react";
import "../styles/PracticalExp.css";

class PracticalExp extends Component {
    constructor() {
        super();

        this.state = {
            jobs: [],
            company: {
                name: "",
                position: "",
                jobDescr: "",
                dateFrom: "",
                dateUntil: "",
            },
            addMore: false,
            icon: "fa fa-plus-square",
        }

        this.toggleAdd = this.toggleAdd.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    toggleAdd() {
        this.setState({
        addMore: this.state.addMore ? false : true,
        icon: (this.state.icon === "fa fa-plus-square") ? "fa fa-window-close" : "fa fa-plus-square",
        })
        this.clearForm();
    }

    clearForm() {
        if(this.state.icon === "fa fa-plus-square") {
            this.setState({
                company: {
                    name: "",
                    position: "",
                    jobDescr: "",
                    dateFrom: "",
                    dateUntil: "",
                },
            })
        }
    }

    submitForm(e){
        e.preventDefault();
        let obj = this.state.company;

        this.setState({
            jobs: this.state.jobs.concat(obj),
        })
        this.toggleAdd();
    }

    handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        
        this.setState({
            company: {
                ...this.state.company,
                [name]: value,
            },
        });

    }

    render() {
        const isEmpty = this.state.jobs.length;

        return (
            <div className ="grid-item item3" > <h5 className="title">Work Exp</h5>
                 <button className="addBtn" onClick={this.toggleAdd} > <i className={this.state.icon}></i> </button>
                {this.state.addMore ? ( 
                    <div className="practical">
                        <form onSubmit={this.submitForm}>
                            <label className="form-label" htmlFor="name">Company name:</label>
                            <input type="text" name="name" onChange={this.handleChange} value={this.state.company.name} required/>
                            <br/>
                            <label className="form-label" htmlFor="name">Job position:</label>
                            <input type="text" name="position" onChange={this.handleChange} value={this.state.company.position} required/>
                            <br/>
                            <label className="form-label" htmlFor="name">Job description:</label>
                            <br/>
                            <textarea name="jobDescr" onChange={this.handleChange} value={this.state.company.jobDescr} required/>
                            <br/>
                            <label className="form-label" htmlFor="name">Started work:</label>
                            <input type="date" name="dateFrom" onChange={this.handleChange} value={this.state.company.dateFrom} />
                            <br/>
                            <label className="form-label" htmlFor="name">Quit work:</label>
                            <input type="date" name="dateUntil" onChange={this.handleChange} value={this.state.company.dateUntil} />
                            <br/><br/>
                            <button type="submit" > <i className="fa fa-plus"></i> </button>
                        </form>
                    </div>
                ) : (
                    <div className="none"> </div>
                )
                }
            { Boolean(isEmpty) ? (
                <CompanyCard jobs={this.state.jobs}></CompanyCard>
            ) : (
                <div className="none"> </div>
            )}
            </div>
        )
    }
}


class CompanyCard extends Component {


    render() {
        const companies = this.props.jobs;
        
        return (
            <div className="company-container practicsl"> 
                {companies.map(company => {
                    return (
                        <div key={companies.indexOf(company)} className="company-card">
                            <span>Company:</span> <span className="card-display"> {company.name} </span>   
                            <br/><br/>
                            <span>Job position:</span> <span className="card-display"> {company.position} </span>   
                            <br/><br/>
                            <span>Job description:</span> <p className="card-display description"> {company.jobDescr} </p>   
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                            {!!(Boolean(company.dateFrom)) ? (
                                <p>
                                    <span>Started:</span> <span className="card-display"> {company.dateFrom} </span>
                                </p>
                            ) : (
                                <span className="none">  </span >
                            ) }
                            {!!(Boolean(company.dateUntil)) ? (
                                <p>
                                    <span>Until:</span> <span className="card-display"> {company.dateUntil} </span>
                                </p>
                            ) : (
                                <span className="none">  </span>
                            ) }

                        </div>
                    )
                  
                })
                }
                
            </div>
        )
    }

}

export {PracticalExp};