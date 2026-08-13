import React, { useEffect, useState } from "react";

function FetchUseEffect() {


    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserData()
    })

    const fetchUserData = () => {
        fetch("https://dummyjson.com/users", {
            method: 'GET'
        })
            .then((respose) => {
                return respose.json()
            })
            .then((response) => {
       //          console.log(response.users)
                setUserData(response.users)
            })
    }

    return (

        <div className="container">
            <table className="table table-hover">
                <thead className="table-dark">
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
                    {
                        userData && userData.map((data, index) => {
                            // console.log("--->Mapped Data : ", data)
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.address.state}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default FetchUseEffect