import React from "react"
import ClassProps from "./ClassProps"
import FunctionProps from "./FunctionProps"

function MainProps() {

    return (
        <div className="mb-3">
            <div className="container">
                {/* <h1>Main Props</h1> */}
                <h1 style={{ textAlign: "center" }} className="mt-3">Class Componenet Props</h1>
                <div className="row">
                    <ClassProps title="card 1" desc="card 1 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 2" desc="card 2 data" img="https://cdn.pixabay.com/photo/2026/07/29/10/48/10-48-28-968_1280.jpg" />
                    <ClassProps title="card 3" desc="card 3 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 4" desc="card 4 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 5" desc="card 5 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 6" desc="card 6 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 7" desc="card 7 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                    <ClassProps title="card 8" desc="card 8 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                </div>
            </div>
            <div>
                <div className="container">
                    <h1 style={{ textAlign: "center" }} className="mt-3">Function Componenet Props</h1>
                    <div className="row">
                        <FunctionProps title="card 1" desc="card 1 data" img="https://cdn.pixabay.com/photo/2026/08/04/06/54/06-54-09-241_1280.jpg" />
                        <FunctionProps title="card 2" desc="card 2 data" img="https://cdn.pixabay.com/photo/2026/07/29/10/48/10-48-28-968_1280.jpg" />
                        <FunctionProps title="card 3" desc="card 3 data" img="https://cdn.pixabay.com/photo/2023/05/01/13/12/tree-7963026_1280.jpg" />
                        <FunctionProps title="card 4" desc="card 4 data" img="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg" />
                        <FunctionProps title="card 5" desc="card 5 data" img="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_1280.jpg" />
                        <FunctionProps title="card 6" desc="card 6 data" img="https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_1280.jpg" />
                        <FunctionProps title="card 7" desc="card 7 data" img="https://cdn.pixabay.com/photo/2021/10/02/11/43/empire-state-building-6675010_1280.jpg" />
                        <FunctionProps title="card 8" desc="card 8 data" img="https://cdn.pixabay.com/photo/2025/09/10/12/32/tokyo-9826329_1280.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainProps