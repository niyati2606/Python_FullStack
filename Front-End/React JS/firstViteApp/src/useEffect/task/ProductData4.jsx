import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData4() {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetchCardData()
    })

    const fetchCardData = async () => {

        try {
            const response = await axios.get("https://api.sampleapis.com/coffee/hot")
            console.log(response.data)
            setCardData(response.data)
        }
        catch (error) {
            console.log("Error ::", error)
        }
    }

    return (
        <div className="container">
            <div className="row mb-3">
                {

                    cardData && cardData.map((coffee, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mx-auto">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={coffee.image}
                                        className="card-img-top"
                                        alt={coffee.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{coffee.title}</h5>
                                        <p className="card-text text-truncate">
                                            {coffee.description}
                                        </p>
                                        <div className="mb-2">
                                            {
                                                coffee.ingredients.map((ingredient, idx) => (
                                                    <span key={idx} className="badge bg-warning text-dark me-1">
                                                        {ingredient}
                                                    </span>
                                                ))
                                            }
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

export default ProductData4