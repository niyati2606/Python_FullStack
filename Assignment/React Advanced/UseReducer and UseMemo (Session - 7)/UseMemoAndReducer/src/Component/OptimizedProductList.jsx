import React, { useMemo, useState } from "react";

function OptimizedProductList() {
    const [count, setCount] = useState(0);

    const products = useMemo(() => {
        return Array.from({ length: 1000 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 5000 + 100).toFixed(2)
        }));
    }, []);

    const productElements = useMemo(() => {
        return products.map((product) => (
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
    }, [products]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Product List
            </h2>

            <div className="text-center mb-4">
                <button
                    className="btn btn-primary"
                    onClick={() => setCount(count + 1)}
                >
                    Re-render: {count}
                </button>
            </div>

            <div className="row">
                {productElements}
            </div>
        </div>
    );
}

export default OptimizedProductList;