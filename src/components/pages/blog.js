import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <div>
                <Link to='/about'>More info about me!</Link>
            </div>
        </div>
    );
}
