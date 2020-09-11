import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <div className="location__address">Address: {location.address}</div>
        <div className="location__squareFeet">Sqaure footage: {location.squareFeet}</div>
    </section>
)