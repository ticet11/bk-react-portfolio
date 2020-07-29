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

    const createMarkup = (contentText, id) => {
        const newContentText =
            contentText.slice(0, 3) +
            ` id="${id}"` +
            contentText.slice(3);

        return { __html: newContentText };
    };

    const titleSlicer = (title, method) => {
        let starIndex = title.indexOf(" - ");
        if (method === "title" && starIndex !== -1) {
            return title.slice(0, starIndex - 6);
        } else if (method === "title") {
            return title
                .replace(" (contains spoilers)", "")
                .slice(0, -6);
        }
        if (method === "date" && starIndex !== -1) {
            return title
                .replace("(contains spoilers)", "")
                .slice(starIndex - 4, starIndex);
        } else if (method === "date") {
            return title
                .replace(" (contains spoilers)", "")
                .slice(-4);
        }
        if (method === "stars" && starIndex !== -1) {
            return title
                .slice(starIndex + 3, -1)
                .replace(" (contains spoilers", "");
        }
    };

    const insertTitle = (item) => {
        return (
            <div className="upper-card">
                <div className="title-wrapper">
                    <a href={item.link} target="_blank">
                        <h2 className="title">
                            {titleSlicer(item.title, "title")}
                        </h2>
                    </a>
                    <p className="release-date">
                        {titleSlicer(item.title, "date")}
                    </p>
                    <p className="star-rating">
                        {titleSlicer(item.title, "stars")}
                    </p>
                </div>
                <p className="review-date">
                    Review published:{" "}
                    <i>{item.pubDate.slice(0, -15)}</i>
                </p>
            </div>
        );
    };

    return (
        <div className="card-container">
            <h1 className="header">What Have I Been Watching?</h1>
            <div className="card-list">
                {isLoading
                    ? "Loading..."
                    : feed.map((item) => {
                          console.log(item);
                          {
                              insertTitle(item);
                          }
                          return (
                              <div
                                  key={item.isoDate}
                                  className="card"
                              >
                                  <div
                                      className="description"
                                      dangerouslySetInnerHTML={createMarkup(
                                          item.content,
                                          item.guid
                                      )}
                                  ></div>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default Letterboxd;
