import React from "react"
import "./Products.css"

export const Product = ({ product, productType }) => (
    <section className="product">
        <div className="product__name">{product.name}</div>
        <div className="product__Type">type:{productType.type}</div>
    </section>
)