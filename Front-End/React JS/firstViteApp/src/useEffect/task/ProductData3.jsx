import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData3() {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetchCardData()
    })

    const fetchCardData = async () => {

        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products")
            console.log(response.data)
            setCardData(response.data)
        }
        catch (error) {
            console.log("Error ::", error)
        }
    }

    return (
        <div className="container">
            <div className="row">
                {

                    cardData && cardData.map((product, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.images[0]}
                                        className="card-img-top"
                                        alt={product.title}
                                        style={{ height: '220px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <span className="badge bg-secondary mb-2 align-self-start">
                                            {product.category.name}
                                        </span>
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="card-text text-truncate">
                                            {product.description}
                                        </p>
                                        <p className="fw-bold mt-auto mb-0">${product.price}</p>
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

export default ProductData3