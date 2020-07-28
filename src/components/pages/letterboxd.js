import React, { useState, useEffect } from "react";
import RSSParser from "rss-parser";

const Letterboxd = () => {
    const [feed, setFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const parser = new RSSParser();

    useEffect(() => {
        parser.parseURL(
            "https://cors-anywhere.herokuapp.com/https://letterboxd.com/ticet11/rss/",
            function (err, feed) {
                if (err) throw err;
                setFeed(feed.items);
            }
        );
        if (feed !== []) {
            setIsLoading(false);
        }
        return () => "finished";
    }, []);

    const createMarkup = (contentText) => {
        return { __html: contentText };
    };

    const feedMap = () => {
        feed.map((item) => {
            console.log(item);
            return (
                <div key={item.isoDate} className="card">
                    <div className="title-wrapper">
                        <a href={item.link} target="_blank">
                            <h2 className="title">
                                {item.title.replace(
                                    " (contains spoilers)",
                                    ""
                                )}
                            </h2>
                        </a>
                        <p className="review-date">
                            Review published:{" "}
                            <i>{item.pubDate.slice(0, -15)}</i>
                        </p>
                    </div>
                    <div
                        className="description"
                        dangerouslySetInnerHTML={createMarkup(
                            item.content
                        )}
                    ></div>
                </div>
            );
        });
    };

    return (
        <div className="card-container">
            <h1 className="header">What Have I Been Watching?</h1>
            <div className="card-list">
                {isLoading ? "Loading..." : feedMap()}
            </div>
        </div>
    );
};

export default Letterboxd;
