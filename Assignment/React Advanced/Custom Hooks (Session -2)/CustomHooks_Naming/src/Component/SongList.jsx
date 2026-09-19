import React, { useEffect } from "react";
import useFetchData from "../CustomHooks/useFetchData";

function UserCards() {

    const {
        data: users,
        loading,
        error,
        fetchSongs
    } = useFetchData("https://jsonplaceholder.typicode.com/users");

    useEffect(() => {
        fetchSongs()
    },[])

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-primary"></div>
                <p className="mt-2">Loading users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <h2 className="text-center mb-4">
                Users List
            </h2>

            <div className="row g-4">

                {users.map((user) => (

                    <div className="col-md-6 col-lg-4" key={user.id}>

                        <div className="card h-100 shadow-sm">

                            {/* Card Header */}
                            <div className="card-header bg-primary text-white text-center">
                                <h5 className="mb-0">
                                    {user.name}
                                </h5>

                                <small>
                                    @{user.username}
                                </small>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">

                                <p className="card-text">
                                    <strong>Email:</strong>
                                    <br />
                                    {user.email}
                                </p>

                                <p className="card-text">
                                    <strong>Phone:</strong>
                                    <br />
                                    {user.phone}
                                </p>

                                <p className="card-text">
                                    <strong>Address:</strong>
                                    <br />
                                    {user.address.suite},{" "}
                                    {user.address.street}
                                    <br />
                                    {user.address.city},{" "}
                                    {user.address.zipcode}
                                </p>

                                <p className="card-text">
                                    <strong>Company:</strong>
                                    <br />
                                    {user.company.name}
                                </p>

                            </div>

                            {/* Card Footer */}
                            <div className="card-footer bg-white">

                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary w-100"
                                >
                                    Visit Website
                                </a >

                            </div >

                        </div >

                    </div >

                ))}

            </div >

        </div >
    );
}

export default UserCards;