import React from "react";
import { Link } from "react-router-dom";

export default function noMatch() {
    return (
        <div>
            <h2>Wow, it's like that's not even a page.</h2>
            <Link to="/">Go back home.</Link>
        </div>
    );
}
