import React, { Component } from "react";

class ClassComponenetState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Niya",
            age: 26
        }
    }

    render() {
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.state.age}</h1>
            </div>
        )
    }
}


export default ClassComponenetState