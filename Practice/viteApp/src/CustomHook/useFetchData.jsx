import axios from "axios"
import { useState } from "react"

function useFetchData (url) {

    const [data, setData] = useState([])

    const fetchdata = async() => {

        try {
            const response = await axios.get(url)
            setData(response.data)
            console.log("API Data ::: ",response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return{
        data,fetchdata
    }
}

export default useFetchData