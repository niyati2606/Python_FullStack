import React, { useEffect } from 'react'
import useApiCall from '../CustomHooks/useApiCall'

function APICallCustomHook() {

    const { data, fetchData } = useApiCall("https://gorest.co.in/public/v2/users")

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)
    return (
        <div className="container">
            <table className='table my-4'>
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

export default APICallCustomHook