import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData2() {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchProductData()
    })

    const fetchProductData = async () => {

        try {

            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response.data)
            setProductData(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="container">
            <div className="row">
                {
                    productData && productData.map((product, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.image}
                                        className="card-img-top p-3"
                                        alt={product.title}
                                        style={{ height: '200px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="card-text text-truncate">
                                            {product.description}
                                        </p>
                                        <p className="fw-bold mt-auto">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductData2