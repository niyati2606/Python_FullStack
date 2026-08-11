import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

function FunctionComponentObjectState() {

    const [data, setData] = useState({
        name: "niyati",
        count: 0,
        isImage: true
    })

    return (

        <div>

            {/* change name on button click */}
            <h1 className="m-2">Name : {data.name}</h1>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, name: "niya" })}>Change Name</button>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, name: "NS" })}>Change Name</button>

            {/* Change Count on button click */}
            <h1 className="m-2">Count : {data.count}</h1>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, count: data.count + 1 })}>Increase Count</button>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, count: data.count - 1 })}>Decrease Count</button>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, count: 0 })}>Set to 0</button>

            <br></br>
            <hr />

            {/* Hide, shoow, toogle image */}
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button className="btn btn-primary m-2" onClick={() => setData({ ...data, isImage: !data.isImage })}>Toogle</button>

            {
                data.isImage ? <ImageComponent /> : false
            }

        </div>
    )
}

export default FunctionComponentObjectState