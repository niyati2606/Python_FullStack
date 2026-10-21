import axios from 'axios'
import React, { useState } from 'react'

function useAddData(endpoint,body) {

    const addData = async() => {

        try {
            const addResponse = await axios.post(endpoint,body)
            console.log(addResponse.data)
        } catch (error) {
            console.log("Add Error : ", error)
        }
    }

    return {
         addData
    }
}

export default useAddData