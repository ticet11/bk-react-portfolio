import React from 'react'

export default function PortfolioDetail(props) {
    console.log(props);
    return (
        <div>
            <h2>Portfolio Details for {props.match.params.slug}</h2>
        </div>
    )
}
