import React from "react";

export default function About() {
    return (
        <div>
            <div className="content-page-wrapper two-column">
                <div
                    className="left-column"
                    
                ></div>
                <div className="right-column bio-content">
                    <p>
                        I don't know the answer to every question, but
                        do know how to find those answers and I love
                        the process. I love learning new skills and
                        finding new ways to solve problems. Recently,
                        that has meant exploring game development in
                        lua and Love2D.
                    </p>
                    <p>
                        I have been exploring the bounds of technology
                        since I was a little kid, taking old
                        electronics apart or figuring out how to get
                        Red Alert on the old Windows 95 computer.
                    </p>
                    <p>
                        Due to my diverse job history, I have an
                        understanding of several varied industries
                        that allows me to understand problems from
                        many perspectives. My solution to a problem
                        will likely be different from yours and I
                        think that's an incredible asset in
                        development.
                    </p>

                    <p>These are some of my other skills:</p>

                    <ul className='skills-container'>
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
                        In my spare time, if I’m not coding, I like
                        fixing cars and motorcycles and watching
                        movies. You can check out what movies I've
                        been watching on my{" "}
                        <a href="https://letterboxd.com/ticet11/">
                            letterboxd account
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
