import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyState";
import Header from "../Common/Header";

function AddProductComponent() {

    const context = useContext(MyContext)

    const { products, setProducts, addProduct } = context

    const setValues = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
        console.log(products)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct();
    };


    return (
        <div>
            <Header />
            <div className="container py-4" style={{ maxWidth: 720 }}>
                {/* Top bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Add product</h4>
                    <Link to="/" type="button" className="btn btn-outline-secondary btn-sm">
                        ← Back to products
                    </Link>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <form>
                            {/* Name */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Product name</label>
                                <input
                                    id="name"
                                    value={products.product_name}
                                    name="product_name"
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Wireless Headphones"
                                    onChange={setValues}
                                />
                            </div>

                            {/* Price + Category */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <div className="input-group">
                                        <span className="input-group-text">₹</span>
                                        <input id="price" value={products.product_price}
                                            name="product_price" type="number" min="0" className="form-control"
                                            onChange={setValues} />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <input
                                        id="category"
                                        value={products.product_category}
                                        name="product_category"
                                        type="text"
                                        onChange={setValues}
                                        className="form-control"
                                        placeholder="e.g. Electronics"
                                    />
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image URL</label>
                                <input
                                    id="image"
                                    value={products.product_img}
                                    name="product_img"
                                    type="url"
                                    onChange={setValues}
                                    className="form-control"
                                    placeholder="https://example.com/product.jpg"
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    id="description"
                                    onChange={setValues}
                                    value={products.prodcut_description}
                                    name="prodcut_description"
                                    rows={4}
                                    className="form-control"
                                    placeholder="Short details about the product"
                                />
                            </div>

                            {/* Actions */}
                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/" type="button" className="btn btn-outline-secondary">Cancel</Link>
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Save product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductComponent