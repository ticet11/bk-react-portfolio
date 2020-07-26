import React, { useState, useEffect } from "react";
import axios from "axios";

const Letterboxd = () => {
    const [feed, setFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const retrievedFeed = parser.parseURL(
            "https://letterboxd.com/ticet11/rss/"
        );
        setFeed(retrievedFeed);
    });

    return (
        <div>
            {feed.map((item, index) => (
                <div key={i}>
                    <h1>item.title</h1>
                </div>
            ))}
        </div>
    );
};

export default Letterboxd;
