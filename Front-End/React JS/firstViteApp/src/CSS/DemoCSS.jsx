import React from "react";
import "./commonStyle.css"

const DemoCSS = () => {

    let h2Style = {
        background : "blue",
        color : "white",
    }

    return (

        <div>
            <h1 style={{ background: "green", color: "white" }}>Inline CSS Demo</h1>

            <h2 style={h2Style}>Internal CSS Demo</h2>

            <h1 className="h1Style">External CSS Demo</h1>
        </div>
    )

}

export default DemoCSS