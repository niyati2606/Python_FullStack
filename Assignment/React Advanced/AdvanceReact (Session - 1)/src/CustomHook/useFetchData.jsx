import React, { useState } from 'react'

function useFetchData(endpoint) {
    const [data, setData] = useState([])

    const fetchData = () => {

        fetch(endpoint, {
            method: "GET"
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
              //  console.log(response)
                setData(response)
            })
            .catch((error) => {
                console.log("Api Error : ", error)
            })
    }

    return {
        data, fetchData
    }

}
export default useFetchData