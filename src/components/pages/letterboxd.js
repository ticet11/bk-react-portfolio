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
        return {__html: contentText}
    }

    return (
        <div>
            {isLoading
                ? "Loading..."
                : feed.map((item) => {
                      console.log(item);
                      return (
                          <div
                              key={item.isoDate}
                              className="movie-card"
                          >
                              <h2>{item.title}</h2>
                              <div className='description' dangerouslySetInnerHTML={createMarkup(item.content)}></div>
                          </div>
                      );
                  })}
        </div>
    );
};

export default Letterboxd;
