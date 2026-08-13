import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData() {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        getProductData()
    })

    const getProductData = async () => {

        try {

            const response = await axios.get("https://dummyjson.com/products")
            //console.log(response.data.products)
            setProductData(response.data.products)

        } catch (err) {
            console.log(err)
        }
    }

    // console.log(productData)

    return (

        <div className="container">
            <div className="row">
                {
                    productData && productData.map((product, index) => {
                        return (
                            <div className="card mb-3 mx-auto" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.images[0]} className="img-fluid rounded-start" alt={product.thumbnail} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-body-secondary">Price : ${product.price}</small></p>
                                        </div>
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

export default ProductData