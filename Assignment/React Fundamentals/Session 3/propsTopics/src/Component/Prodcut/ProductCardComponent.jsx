import React from 'react'
import PropTypes from 'prop-types'

function ProductCardComponent({ productName, productPrice, productImage }) {
    return (
        <div style={{
            width: "fit-content"
        }}>
            <div style={{
                border: "1px solid #ccc",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                textAlign: "center",
                overflow : "hidden"
            }}>

                <img
                    src={productImage}
                    alt={productName}
                    style={{
                        width: "200px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }}
                />

                <h2>{productName}</h2>
                <p>Price: ₹{productPrice}</p>
            </div>
        </div>
    )
}

ProductCardComponent.propTypes = {
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productImage: PropTypes.string
}

export default ProductCardComponent