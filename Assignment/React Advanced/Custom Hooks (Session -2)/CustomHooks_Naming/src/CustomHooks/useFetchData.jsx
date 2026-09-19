import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchSongs = async () => {

        try {
            const response = await axios.get(url)
            console.log(response.data)
            setLoading(false);
            setData(response.data)
        } catch (error) {
            setLoading(false);
            console.log(error)
        }

    }

    return { data, loading, error, fetchSongs };
}

export default useFetchData;