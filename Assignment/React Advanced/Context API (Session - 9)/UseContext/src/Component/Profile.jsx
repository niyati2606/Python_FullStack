import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Profile() {
    const { state, dispatch } = useContext(AuthContext);

    const [newName, setNewName] = useState("");

    const updateName = () => {
        if (newName.trim() !== "") {
            dispatch({
                type: "UPDATE_NAME",
                payload: newName
            });

            setNewName("");
        }
    };

    return (
        <div className="card shadow p-4" style={{width : "400px"}}>
            <h3>Instagram Profile</h3>

            {state.isLoggedIn ? (
                <>
                    <h5 className="mt-3">
                        Display Name: {state.user.name}
                    </h5>

                    <p className="text-muted">
                        @{state.user.username}
                    </p>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter new display name"
                        value={newName}
                        onChange={(e) =>
                            setNewName(e.target.value)
                        }
                    />

                    <button
                        className="btn btn-primary"
                        onClick={updateName}
                    >
                        Update Name
                    </button>
                </>
            ) : (
                <p>Please login</p>
            )}
        </div>
    );
}

export default Profile;