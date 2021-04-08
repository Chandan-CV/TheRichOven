import React from 'react'
import './ProductDisplay.css'
function ProductDisplay({name, price, imageURL}) {
    return (
        <div className="outline">
        <img
        className="productImage"
        src= {imageURL}
        />
        <div className="productNameDiv">
        <p className="productName">{name}</p>
        </div>
        <p className="productPrice">Price: {price} INR</p>
        </div>
    )
}

export default ProductDisplay
