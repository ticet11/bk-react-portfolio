import React from "react";

export default function About() {
    return (
        <div>
            <div className="content-page-wrapper two-column">
                <div className="left-column about-img"></div>
                <div className="right-column bio-content">
                    <p>
                        Hi, thanks for coming to take a look at my
                        work. My name is Brian and I look forward to
                        getting to know you!
                    </p>
                    <p>
                        My wife and I have a 2 year old little girl.
                        We also have a cat, named Gatsby, that my wife
                        likes more than I do. He's okay, I guess.
                    </p>
                    <p>
                        In my spare time, if I’m not coding, I like
                        fixing cars and motorcycles and watching
                        movies. Check out what movies I've been
                        watching on the reviews page.
                    </p>
                    <p>
                        I'm currently working at Avii as an Apprentice
                        Software Engineer. As a part of my current
                        project, I'm learning ASP.NET and C#.
                    </p>
                    <p>These are some of my other skills:</p>

                    <ul className="skills-container">
                        <li>Databases, including MongoDB and SQL</li>
                        <li>React.js</li>
                        <li>Lua and Love2D</li>
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
                        I don't know the answer to every question, but
                        do know how to find those answers and I love
                        the process. I love learning new skills and
                        finding new ways to solve problems.
                    </p>
                </div>
            </div>
        </div>
    );
}
