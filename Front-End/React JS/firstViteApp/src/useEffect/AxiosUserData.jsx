/*
    need to install axios because it is third party lib
    npm i axios
    then import in specific file
*/

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosUserData() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserData()
    })

    const fetchUserData = async () => {

        try {

            const response = await axios.get("https://dummyjson.com/users")
            console.log(response.data.users)
            setUserData(response.data.users)

        }
        catch (error) {
            console.log("API Error===>", error)
        }

    }

    return (

        <div className="container">
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.map((data, index) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.address.city}</td>
                                <td>{data.address.state}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default AxiosUserData