import { useMemo, useState } from "react";

function ProductList() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = useMemo(() => {
        return Array.from({ length: 1000 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 5000 + 100).toFixed(2)
        }));
    }, []);

    // Filter products using useMemo
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Product List
            </h2>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <p>
                Showing {filteredProducts.length} products
            </p>

            <div className="row">
                {filteredProducts.map((product) => (
                    <div
                        className="col-md-3 mb-3"
                        key={product.id}
                    >
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.name}
                                </h5>

                                <p className="card-text">
                                    Price: ₹{product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;