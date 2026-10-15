import React from 'react'
import NavBar from '../Common/NavBar'
import useFetchData from '../CustomHook/useFetchData'
import { useEffect } from 'react'

function ProductsComponent() {

    const { data, fetchdata } = useFetchData("http://localhost:3000/product")

    useEffect(() => {
        fetchdata()
    }, [])

    console.log("Product :: ===", data)

    return (
        <>
            <NavBar />
            <div>
                <h2>Prodcuts</h2>
                {
                    data.length == 0 ? (<h1>no data</h1>) :
                        (
                            <table className='table my-4'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>name</th>
                                        <th>price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value) => (
                                            <tr>
                                                <td>{value.name}</td>
                                                <td>{value.price}</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <button className='btn btn-outline-primary'>Edit</button>
                                                        <button className='btn btn-outline-danger'>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                }
            </div>
        </>

    )
}

export default ProductsComponent