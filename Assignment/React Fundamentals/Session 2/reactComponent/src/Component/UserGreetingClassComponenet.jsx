import React, { Component } from 'react'

export class UserGreetingClassComponenet extends Component {

    constructor(props){
        super(props)
        this.data = props
    }

    render() {
        return (
            <div>
                <h2>Hello (Class Component) : {this.data.username}</h2>
            </div>
        )
    }
}

export default UserGreetingClassComponenet