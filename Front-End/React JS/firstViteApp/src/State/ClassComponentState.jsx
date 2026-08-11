import React, { Component } from "react";
import ImageComponent from "./ImageComponent";

class ClassComponenetState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Niya",
            age: 26,
            count: 0,
            isImage: true
        }
    }

    render() {
        return (
            <div>
                {/* change name on button click */}
                <h1 className="m-2">Name : {this.state.name}</h1>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ name: "NR" }) }}>Change Name</button>

                {/* change count on button click */}
                <h1 className="ms-3">Count : {this.state.count}</h1>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increase Count</button>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decrease Count</button>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ count: 0 }) }}>Set to 0</button>

                <br></br>
                <hr />
                {/* image hide show and toogle */}

                <button className="btn btn-primary m-2" onClick={() => { this.setState({ isImage: false }) }}>Hide</button>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ isImage: true }) }}>Show</button>
                <button className="btn btn-primary m-2" onClick={() => { this.setState({ isImage: !this.state.isImage }) }}>Toogle</button>

                {
                    this.state.isImage ? <ImageComponent /> : false
                }
            </div>
        )
    }
}


export default ClassComponenetState