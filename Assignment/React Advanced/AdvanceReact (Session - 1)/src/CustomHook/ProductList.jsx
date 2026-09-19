import React, { useEffect } from 'react'
import useFetchData from './useFetchData'

function ProductList() {

    const { data, fetchData } = useFetchData("https://fakestoreapi.com/products")

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="container mt-5">
            <h2 className="text-center mb-4">Flipkart Products</h2>

            <div className="row">
                {data.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <img
                                    src={product.image}
                                    className="card-img-top p-3"
                                    alt={product.title}
                                    style={{ height: "250px", objectFit: "contain" }}
                                />
                                <h5 className="card-title">
                                    {product.title}
                                </h5>

                                <p className="text-muted">
                                    ₹{product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList