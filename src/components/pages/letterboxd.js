import React, { useState, useEffect } from "react";

const Letterboxd = () => {
    const [feed, setFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const parser = new DOMParser();

    useEffect(() => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://letterboxd.com/ticet11/rss/"
        )
            .then((res) => res.text())
            .then((str) => parser.parseFromString(str, "text/xml"))
            .then((data) => {
                console.log(data.querySelectorAll('item'))
                setFeed(data.querySelectorAll('item'));
            });
        if (feed !== []) {
            setIsLoading(false);
        }
        return () => "finished";
    }, []);

    return <div>{isLoading ? "Loading..." : "Not Loading"}</div>;
};

export default Letterboxd;
