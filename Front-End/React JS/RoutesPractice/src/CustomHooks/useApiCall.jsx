import axios from 'axios'
import React, { useState } from 'react'

function useApiCall(endpoint) {

    const [data, setData] = useState([])

    const fetchData = async() => {
        
        try {
            const response = await axios.get(endpoint)
            setData(response.data)
        }catch(error){
            console.log("Api Error : ",error)
        }
    }

    return {
        data, fetchData
    }
}

export default useApiCall