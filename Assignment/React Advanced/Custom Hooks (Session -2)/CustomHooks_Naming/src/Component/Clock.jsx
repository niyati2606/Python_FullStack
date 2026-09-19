import React from 'react'
import useCurrentTime from '../CustomHooks/useCurrentTime';

function Clock() {

    const time = useCurrentTime();

    return (
        <div className="container mt-5 text-center">
            <div className="card shadow p-4" style={{width : "20%"}}>
                <h2>Live Clock</h2>

                <h3 className="text-primary">
                    {time.toLocaleTimeString()}
                </h3>
            </div>
        </div>
    );
}

export default Clock