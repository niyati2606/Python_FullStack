import React, { useState } from "react";
import NavBar from "../Common/NavBar";

function HomeComponent() {
    const [name, setName] = useState("");
    const [product, setProduct] = useState([]);
    const [edit, setEdit] = useState(null); // null = not editing, otherwise index being edited

    const addData = (e) => {
        e.preventDefault();

        if (name.trim().length === 0) {
            alert("Please Add Name");
            return;
        }

        if (edit !== null) {
            // UPDATE: replace only the item at the edited index
            setProduct(product.map((item, i) => (i === edit ? name : item)));
            setEdit(null);
        } else {
            // ADD
            setProduct([...product, name]);
        }
        setName("");
    };

    const handleEdit = (index) => {
        setName(product[index]); // show current value in the input
        setEdit(index);          // remember which item is being edited
    };

    const handleDelete = (index) => {
        setProduct(product.filter((item, i) => i !== index));
        if (edit === index) {    // deleted the item being edited, so reset
            setEdit(null);
            setName("");
        }
    };

    return (
        <>
            <NavBar />
            <div className="m-4">
                <div className="card shadow p-4 mx-auto" style={{ maxWidth: "650px" }}>
                    <h3 className="m-3 text-sm-center">Crud in List</h3>
                    <form>
                        <div className="m-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Enter Name"
                                name="name"
                            />
                        </div>
                        <button onClick={addData} type="submit" className="btn btn-primary">
                            {edit !== null ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>

                <h4 className="mt-4">Product List</h4>

                {product.length === 0 ? (
                    <p className="text-muted">No products added yet.</p>
                ) : (
                    <ul className="list-group">
                        {product.map((item, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span>{item}</span>

                                <div>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default HomeComponent;       