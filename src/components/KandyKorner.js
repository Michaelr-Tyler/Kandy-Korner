import React from "react";

import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./KandyKorner.css"

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner Locations</h1>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        </>
    )
}