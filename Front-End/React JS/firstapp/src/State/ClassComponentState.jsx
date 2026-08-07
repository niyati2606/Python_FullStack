import React, { Component } from "react";

class ClassComponentState extends Component{

    constructor(){
        super();

        this.person = {
            name : "NS",
            course : "Full-Stack"
        }
    }

    render(){
        return(
            <h1>Name : {this.person.name}</h1>
        )
    }
}

export default ClassComponentState