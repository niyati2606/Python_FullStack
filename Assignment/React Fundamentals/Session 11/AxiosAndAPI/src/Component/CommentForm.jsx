import React, { useState } from "react";
import axios from "axios";

function CommentForm() {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [responseData, setResponseData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://jsonplaceholder.typicode.com/comments", {
                username: username,
                comment: comment
            })
            .then((response) => {
                setResponseData(response.data);
                setUsername("");
                setComment("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4 mb-5">
            <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                    <h3 className="mb-0">Add Comment</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Username
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Comment
                            </label>

                            <textarea
                                className="form-control"
                                placeholder="Write your comment"
                                rows="4"
                                value={comment}
                                onChange={(e) =>
                                    setComment(e.target.value)
                                }
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-dark"
                        >
                            Submit Comment
                        </button>
                    </form>

                    {responseData && (
                        <div className="alert alert-success mt-4">
                            <h5>Response</h5>

                            <p className="mb-1">
                                <strong>Username:</strong>{" "}
                                {responseData.username}
                            </p>

                            <p className="mb-1">
                                <strong>Comment:</strong>{" "}
                                {responseData.comment}
                            </p>

                            <p className="mb-0">
                                <strong>ID:</strong>{" "}
                                {responseData.id}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CommentForm;