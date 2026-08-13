import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserDetailsCard() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserDetails()
    }, []) // ✅ empty array — runs once on mount

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=30")
            setUserData(response.data.results)
        }
        catch (err) {
            console.log("Error -->", err)
        }
    }

    return (
        <div className="container">
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th>Profile Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData && userData.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={user.picture.thumbnail}
                                            className="img-fluid rounded"
                                            alt="Profile"
                                            style={{ maxWidth: '50px' }}
                                        />
                                    </td>
                                    <td>{user.name.first} {user.name.last}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.location.city}</td>
                                    <td>{user.location.state}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserDetailsCard