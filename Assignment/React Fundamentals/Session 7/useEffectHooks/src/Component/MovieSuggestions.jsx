import React, { useState } from "react";

function MovieSuggestions() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "500px" }}>
            <div className="card shadow-sm p-4">
                <h2 className="text-center mb-4">User List</h2>

                <button
                    className="btn btn-primary mb-3"
                    onClick={fetchData}
                >
                    Fetch Data
                </button>

                <ul className="list-group">
                    {data.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MovieSuggestions;