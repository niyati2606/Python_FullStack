import React, { useEffect, useState } from "react";

function IPLScores() {
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(false);

    const fetchScores = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (response.status !== 200) {
                throw new Error("Failed to load scores");
            }

            const data = await response.json();

            setScores(data.slice(0, 5));
            setError(false);
        } catch (error) {
            setError(true);
            setScores([]);
        }
    };

    useEffect(() => {
        fetchScores();
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-success text-white">
                    <h3>IPL Scores</h3>
                </div>

                <div className="card-body">
                    {error ? (
                        <div className="alert alert-danger">
                            Error loading scores
                        </div>
                    ) : (
                        <div className="list-group">
                            {scores.map((team) => (
                                <div
                                    key={team.id}
                                    className="list-group-item d-flex justify-content-between"
                                >
                                    <strong>{team.name}</strong>

                                    <span className="badge bg-success">
                                        {team.id * 20}/
                                        {team.id}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IPLScores;