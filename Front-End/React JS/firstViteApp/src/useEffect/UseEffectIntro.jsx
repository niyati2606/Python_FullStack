import React, { useEffect, useState } from "react";

function UseEffectIntro() {

    /* 
        it is a react hook
        use to perfrom side effect such as fetch data, update DOM, auto API call
    */

    //empty data show
    // useEffect(() => {
    //     console.log("Outside")
    //     return (() => {
    //         console.log("Inside")
    //     })
    // })

    //empty array
    // useEffect(() => {
    //     console.log("Outside")
    //     return (() => {
    //         console.log("Inside")
    //     })
    // },[])

    //array with data

    const[name,setName] = useState("niya")

    useEffect(() => {
        console.log("Outside")
        return (() => {
            console.log("Inside")
        })
    },[name])

    return (

        < div className="container" >
            <h1>Name : {name}</h1>
            <button className="btn btn-success" onClick={()=>setName("niyati")}>Change Name</button>
        </div >

    )

}

export default UseEffectIntro