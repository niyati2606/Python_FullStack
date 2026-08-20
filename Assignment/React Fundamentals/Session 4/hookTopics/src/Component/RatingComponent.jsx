import React, { useState } from 'react'

function RatingComponent() {
    const [rating, setRating] = useState(0);

    return (
        <div
            className="card shadow-sm p-4 m-3 text-center"
            style={{ width: "350px" }}
        >
            <h4 className="mb-3">Rate this Restaurant</h4>

            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => setRating(star)}
                        style={{
                            fontSize: "40px",
                            cursor: "pointer",
                            color: star <= rating ? "#ffc107" : "#ccc",
                            margin: "5px"
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className="mt-3">
                {rating === 0
                    ? "Select a rating"
                    : `You rated this restaurant ${rating}/5`}
            </p>
        </div>
    )
}

export default RatingComponent