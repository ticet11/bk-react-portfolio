import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RSSParser from "rss-parser";

const Letterboxd = () => {
	const [feed, setFeed] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parser = new RSSParser();

	useEffect(() => {
		parser.parseURL(
			"https://cors-proxy.briankozub.workers.dev/?url=https://letterboxd.com/ticet11/rss/",
			function (err, feed) {
				if (err) throw err;
				setFeed(feed.items.slice(0, 6));
				setIsLoading(false);
			}
		);
		return () => "finished";
	}, []);

	const createMarkup = (contentText, id) => {
		const newContentText = contentText.slice(0, 3) + ` id="${id}"` + contentText.slice(3);

		return { __html: newContentText };
	};

	const titleSlicer = (title, method) => {
		let starIndex = title.lastIndexOf(" - ");
		if (method === "title" && starIndex !== -1) {
			return title.slice(0, starIndex - 6);
		} else if (method === "title") {
			return title.replace(" (contains spoilers)", "").slice(0, -6);
		}
		if (method === "date" && starIndex !== -1) {
			return title.replace("(contains spoilers)", "").slice(starIndex - 4, starIndex);
		} else if (method === "date") {
			return title.replace(" (contains spoilers)", "").slice(-4);
		}
		if (method === "stars" && starIndex !== -1) {
			return title.slice(starIndex + 3).replace(" (contains spoilers)", "");
		}
	};

	const insertTitle = (item) => {
		return (
			<div className="upper-card">
				<div className="title-wrapper">
					<a href={item.link} target="_blank">
						<h2 className="title">{titleSlicer(item.title, "title")}</h2>
					</a>
					<div className="year-star">
						<p className="release-date">{titleSlicer(item.title, "date")}</p>
						<p className="star-rating">{titleSlicer(item.title, "stars")}</p>
					</div>
				</div>
				<p className="review-date">
					Review published: <i>{item.pubDate.slice(0, -15)}</i>
				</p>
			</div>
		);
	};

	return (
		<div className="card-container">
			<div className="header">
				<h1>What I've Been Watching</h1>
				<p>
					The reviews are fetched from my{" "}
					<a target="_blank" href="https://letterboxd.com/ticet11">
						letterboxd
					</a>{" "}
					RSS feed. If they allowed access to their real API, I would have used that and
					it probably would have been a bit easier to style. Since I'm fetching the RSS
					feed from letterboxd, I need to run the request through a proxy, to avoid cors
					issues. I'm running a Cloudflare worker that functions as a proxy for this page
					and it works much better than the old Heroku version I was running.
				</p>
			</div>
			<div className="card-list">
				{isLoading ? (
					<div className="content-loader card">
						<FontAwesomeIcon icon="yin-yang" spin />
						Loading...
					</div>
				) : (
					feed.map((item) => {
						return (
							<div key={item.isoDate} className="card">
								{insertTitle(item)}
								<div
									className="description"
									dangerouslySetInnerHTML={createMarkup(item.content, item.guid)}
								></div>
								<a
									href="https://letterboxd.com/ticet11"
									target="_blank"
									className="dbbtn"
								>
									See More
								</a>
							</div>
						);
					})
				)}
			</div>

			<p className="footer">
				See more on{" "}
				<a target="_blank" href="https://letterboxd.com/ticet11">
					letterboxd
				</a>
				.
			</p>
		</div>
	);
};

export default Letterboxd;
