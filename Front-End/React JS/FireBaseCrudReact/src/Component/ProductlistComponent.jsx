import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Context/MyState";
import Header from "../Common/Header";

function ProductlistComponent() {
    const context = useContext(MyContext);

    const { allProducts, editProducthandle, deleteProduct } = context;

    return (
        <div>
            <Header />
            <div className="container py-4">
                {/* Top bar */}
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                    <h4 className="mb-0">Products</h4>
                    <Link to="/addproduct" type="button" className="btn btn-primary">+ Add product</Link>
                </div>

                {/* Listing */}
                <div className="card shadow-sm">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th style={{ minWidth: 220 }}>Description</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProducts.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center text-muted py-5">
                                            No products yet. Click "Add product" to create one.
                                        </td>
                                    </tr>
                                )}

                                {allProducts.map((p) => (
                                    <tr key={p.id}>
                                        <td>
                                            <img
                                                src={p.product_img}
                                                alt={p.product_name}
                                                width={56}
                                                height={56}
                                                className="rounded border object-fit-cover"
                                            />
                                        </td>
                                        <td className="fw-semibold">{p.product_name}</td>
                                        <td>
                                            <span className="badge text-bg-secondary">{p.product_category}</span>
                                        </td>
                                        <td>₹{p.product_price.toLocaleString("en-IN")}</td>
                                        <td>
                                            <div className="text-muted small" style={{ maxWidth: 320 }}>
                                                {p.prodcut_description}
                                            </div>
                                        </td>
                                        <td className="text-end text-nowrap">
                                            <Link to="/updateproduct" onClick={() => editProducthandle(p)} type="button" className="btn btn-sm btn-outline-secondary me-1">Edit</Link>
                                            <button onClick={() => deleteProduct(p)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductlistComponent