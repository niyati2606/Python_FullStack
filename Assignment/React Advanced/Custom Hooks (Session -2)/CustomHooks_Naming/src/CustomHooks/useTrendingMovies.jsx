import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useTrendingMovies() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://www.omdbapi.com/?apikey=91d159ed&s=batman&type=movie"
            )
            .then((response) => {
               setData(response.data.Search);
                console.log(response.data.Search)
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { loading, error, data };
}

export default useTrendingMovies