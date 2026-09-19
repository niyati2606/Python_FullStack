import React, { useCallback, useMemo, useState } from "react";

// Individual product component
const ProductItem = React.memo(function ProductItem({
    product,
    handleClick
}) {
    console.log("Rendering:", product.name);

    return (
        <div className="card mb-2">
            <div className="card-body d-flex justify-content-between">
                <span>
                    {product.name} - ₹{product.price}
                </span>

                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleClick(product.id)}
                >
                    Select
                </button>
            </div>
        </div>
    );
});

function LargeList() {
    const [count, setCount] = useState(0);
    const [selectedId, setSelectedId] = useState(null);

    // Create the large list only once
    const products = useMemo(() => {
        return Array.from({ length: 1000 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (index + 1) * 100
        }));
    }, []);

    // Memoize the function so its reference does not change
    const handleClick = useCallback((id) => {
        setSelectedId(id);
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">
                Large Product List
            </h2>

            <div className="text-center mb-4">
                <button
                    className="btn btn-success"
                    onClick={() => setCount(count + 1)}
                >
                    Count: {count}
                </button>

                {selectedId && (
                    <p className="mt-3">
                        Selected Product: {selectedId}
                    </p>
                )}
            </div>

            <div>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default LargeList;