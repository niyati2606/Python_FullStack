import React, { useRef, useState } from "react";

function FeedbackForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const messageRef = useRef(null);

    const handleFocus = () => {
        messageRef.current.focus();
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <div className="card p-4 shadow-sm">
                <h2 className="mb-4">Feedback Form</h2>

                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                {/* Message */}
                <div className="mb-3">
                    <label className="form-label">
                        Message
                    </label>

                    <textarea
                        ref={messageRef}
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your feedback"
                        rows="4"
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleFocus}
                >
                    Focus Message
                </button>
            </div>
        </div>
    );
}

export default FeedbackForm;