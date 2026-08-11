import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

function FunctionComponentState() {

    // useState : Used to store and update data/state.

    const [name, setName] = useState("niya")
    const [count, setCount] = useState(0)
    const [isImage, setIsImage] = useState(true)

    return (
        <div>
            {/* change name on button click */}
            <h1 className="m-2">Name : {name}</h1>
            <button className="btn btn-primary m-2" onClick={() => {setName("NR")}}>Change Name</button>

            {/* change count on button click */}
            <h1 className="ms-3">Count : {count}</h1>
            <button className="btn btn-primary m-2" onClick={()=> {setCount(count + 1)}}>Increase Count</button>
            <button className="btn btn-primary m-2" onClick={()=> {setCount(count - 1)}}>Decrease Count</button>
            <button className="btn btn-primary m-2" onClick={()=> {setCount(0)}}>Set to 0</button>

            <br></br>
            <hr />
            {/* image hide show and toogle */}

            <button className="btn btn-primary m-2" onClick={() => {setIsImage(false)}}>Hide</button>
            <button className="btn btn-primary m-2" onClick={() => {setIsImage(true)}}>Show</button>
            <button className="btn btn-primary m-2" onClick={() => {setIsImage(!isImage)}}>Toogle</button>

            {
                isImage ? <ImageComponent /> : false
            }
        </div>
    )

}

export default FunctionComponentState