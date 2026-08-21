import React, { useEffect, useRef } from "react";

function SearchBarComponent() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="container mt-4" style={{ maxWidth: "500px" }}>
            <div className="mb-3">
                <input
                    type="text"
                    ref={inputRef}
                    className="form-control"
                    placeholder="Search..."
                />
            </div>

            <button className="btn btn-primary">
                Search
            </button>
        </div>
    );
}

export default SearchBarComponent;