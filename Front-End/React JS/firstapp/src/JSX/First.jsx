import React from "react";

function First() {

    // single string
    let name = "Niya"
    console.log(name)

    //object
    let person = {
        name: "Ravi",
        course: "Back-End",
    }

    //array
    let arr = ["2", "5", "100", "Niyati"]

    //print list or any tag
    let list =
        <ul>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Full-Stack</li>
            <li>CS</li>
            <li>CS</li>
        </ul>

    return (
        <>
            <h1>Name : {name}</h1>
            <h2>Name From Object : {person.name}</h2>
            <h1>Value from Array : {arr[3]}</h1>
            <h2>
                {list}
            </h2>
        </>
    )

}

export default First