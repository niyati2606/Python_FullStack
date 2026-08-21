import React, { useEffect } from 'react'

function TrendingSongsComponent() {

    useEffect(() => {
        console.log("Component Mount..!!")
    }, [])

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm text-center">
                <h2>Trending Songs 🎵</h2>
                <p>Check out the latest trending songs!</p>
            </div>
        </div>
    )
}

export default TrendingSongsComponent