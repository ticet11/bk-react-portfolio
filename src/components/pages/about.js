import React from "react";

import profPic from "../../../static/assets/images/about/chickens.jpg";

export default function About() {
    return (
        <div>
            <div className="content-page-wrapper two-column">
                <div
                    className="left-column"
                    style={{
                        background: "url(" + profPic + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="right-column bio-content">
                    <p>
                        Hi, my name is Brian. I'm currently attending
                        Bottega coding bootcamp. I have a rich job
                        history, in several different industries. I
                        think you'll find this gives me an
                        interesting edge in solving problems when
                        programming.
                    </p>
                    <p>
                        Since beginning the program, I've come to
                        really enjoy working with databases and REST
                        APIs, using JavaScript and Python.
                    </p>

                    <p>These are some of my other skills:</p>

                    <ul>
                        <li>
                            Databases, including MongoDB and SQL
                        </li>
                        <li>React JS</li>
                        <li>HTML, CSS, SCSS</li>
                        <li>Git, mostly in GitHub</li>
                        <li>
                            Linux, including Mint, Ubuntu, and
                            Raspbian
                        </li>
                        <li>Public speaking and leadership</li>
                        <li>Teaching and training</li>
                    </ul>

                    <p>
                        In my spare time, if I’m not coding, I like
                        fixing cars and motorcycles and watching
                        movies. I drive a Prius and I like the Big
                        Lewbowski.
                    </p>
                </div>
            </div>
        </div>
    );
}
