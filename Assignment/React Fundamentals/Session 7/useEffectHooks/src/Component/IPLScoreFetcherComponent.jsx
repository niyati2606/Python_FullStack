import React, { useEffect, useState } from 'react'

function IPLScoreFetcherComponent() {

    const [headline, setHeadline] = useState("");


    useEffect(() => {
        fetchIPLScore()
    }, [])

    const fetchIPLScore = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setHeadline(data[0].title);
            })
            .catch((error) => {
                console.error("Error fetching match data:", error);
            });
    }


    return (
        <div className='container m-3'>
            <h2>IPL Match Headline</h2>
            <p>{headline || "Loading match headline..."}</p>
        </div>
    )
}

export default IPLScoreFetcherComponent