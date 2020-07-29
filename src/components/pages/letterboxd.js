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

    const starSlicer = (title, method) => {
        let starIndex = title.indexOf(" - ");
        console.log(starIndex);
        // title.indexOf(" - ★") === -1
        //     ? (starIndex = title.indexOf(" - ½"))
        //     : (starIndex = -1);
        if (method === "titleOnly" && starIndex !== -1) {
            return title.slice(0, starIndex + 1);
        } else if (method === "titleOnly") {
            return title.replace(" (contains spoilers)", "");
        }
        if (method === "starsOnly" && starIndex !== -1) {
            return title
                .slice(starIndex + 3, -1)
                .replace(" (contains spoilers", "");
        }
    };

    return (
        <div className="card-container">
            <h1 className="header">What Have I Been Watching?</h1>
            <div className="card-list">
                {isLoading
                    ? "Loading..."
                    : feed.map((item) => {
                          console.log(item);
                          return (
                              <div
                                  key={item.isoDate}
                                  className="card"
                              >
                                  <div className="title-wrapper">
                                      <a
                                          href={item.link}
                                          target="_blank"
                                      >
                                          <h2 className="title">
                                              {starSlicer(
                                                  item.title,
                                                  "titleOnly"
                                              )}
                                          </h2>
                                      </a>
                                      <p className="star-rating">
                                          {starSlicer(
                                              item.title,
                                              "starsOnly"
                                          )}
                                      </p>
                                      <p className="review-date">
                                          Review published:{" "}
                                          <i>
                                              {item.pubDate.slice(
                                                  0,
                                                  -15
                                              )}
                                          </i>
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
                      })}
            </div>
        </div>
    );
};

export default Letterboxd;
