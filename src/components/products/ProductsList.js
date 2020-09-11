import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Products"
import { ProductTypesContext, ProductTypeProvider } from "./ProductTypesProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypesContext)

    useEffect(() => {
        getProducts()
        getProductTypes()
    }, [])

    return (
        <div className="products">
            {
                products.map((product) => {
                    const type = productTypes.find(cpt => cpt.id === product.productTypeId) || {}
                    console.log(type)
                    return <Product key={product.id}
                     product={product}
                      productType={type}
                       />
                })
            }
        </div>
    )
}