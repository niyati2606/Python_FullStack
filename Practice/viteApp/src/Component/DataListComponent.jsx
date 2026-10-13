import React, { useEffect } from 'react'
import NavBar from '../Common/NavBar'
import useFetchData from '../CustomHook/useFetchData'

function DataListComponent() {

    const { data, fetchdata } = useFetchData("https://gorest.co.in/public/v2/users")

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            <NavBar />
            {
                data.length === 0
                    ?
                    (
                        <h1 className='text-center mt-4'>Loading ...</h1>
                    )
                    :
                    (
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
                                {data.map((value) => (
                                    <tr key={value.id}>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.gender}</td>
                                        <td className={value.status === 'active' ? 'table-success' : 'table-danger'}>
                                            {value.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
            }
        </div>
    )
}

export default DataListComponent