import React from 'react'
import ProductCardComponent from './ProductCardComponent'

function MainPropsComponent() {
    return (

        <div>
            <div style={{
                display: "flex",
            }}>
                <ProductCardComponent
                    productName="Laptop"
                    productPrice={50000}
                    productImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
                />

                <ProductCardComponent
                    productName="Headphones"
                    productPrice={2000}
                    productImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                />

                <ProductCardComponent 
                    productName={""}/>
            </div>
        </div>
    )
}

export default MainPropsComponent