import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserData() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    })

    const fetchData = async () => {

        let response = await axios.get("https://gorest.co.in/public/v2/users")
        console.log(response.data)
        setData(response.data)
    }

    return (
        <div className="container">
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((value, index) => {
                            return (
                                <tr key={data.id}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.gender}</td>
                                    <td className={value.status === 'active' ? 'table-success' : 'table-danger'}>{value.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserData