import axios from 'axios'
import React, { useState } from 'react'

function useAPICall(url) {

    const [apidata, setApiData] = useState([])

    const fetchAPIData = async () => {

        try {
            const apiResponse = await axios.get(url)
            setApiData(apiResponse.data)
        } catch (error) {
            console.log("API Error : ", error)
        }
    }

    return {
        apidata, fetchAPIData
    }
}

export default useAPICall