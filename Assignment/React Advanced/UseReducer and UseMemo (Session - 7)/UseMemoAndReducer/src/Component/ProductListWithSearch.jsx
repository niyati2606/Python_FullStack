import React, { useMemo, useState } from "react";

function ProductListWithSearch() {
    const [search, setSearch] = useState("");

    // Generate 1000 products only once
    const products = useMemo(() => {
        return Array.from({ length: 1000 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 5000 + 100).toFixed(2)
        }));
    }, []);

    // Filter products only when search text changes
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    // Generate product elements only when filtered products change
    const productElements = useMemo(() => {
        return filteredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
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
        ));
    }, [filteredProducts]);

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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <p className="text-muted">
                Showing {filteredProducts.length} products
            </p>

            {/* Product List */}
            <div className="row">
                {productElements}
            </div>

        </div>
    );
}

export default ProductListWithSearch;
