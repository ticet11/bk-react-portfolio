import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
    const { id, description, thumb_image_url, logo } = props.item;
    return (
        <div className='portfolio-item'>
            <img src={thumb_image_url} /> 
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}
