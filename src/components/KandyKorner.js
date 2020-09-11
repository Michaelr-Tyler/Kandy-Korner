import React from "react";

import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./KandyKorner.css"
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductsList";
import { ProductTypeProvider } from "./products/ProductTypesProvider";

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner Locations</h1>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Products</h2>
        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
        </>
    )
}