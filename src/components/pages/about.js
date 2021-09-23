import React from 'react';

export default function About() {
	return (
		<div>
			<div className="content-page-wrapper two-column">
				<div className="left-column about-img"></div>
				<div className="right-column bio-content">
					<p>
						Hi, thanks for coming to take a look at my work. My name is Brian and I look
						forward to getting to know you! I'm originally from Upstate New York. I've
						been married to my wife, Sage, for 4 years and we've got a 3 year old
						daughter, Daisy.
					</p>
					<p>
						In my spare time, if I’m not coding, I like fixing cars and motorcycles and
						watching movies. Check out which movies I've been watching, on the reviews
						page.
					</p>
					<p>
						Before getting into web development, I worked as a baker, a construction
						worker, a guide at a floatation therapy center, and a delivery driver. I'd
						love an opportunity to use some of my previous experiences in a development
						role.
					</p>
					<p>
						We came back to Utah in 2020 so I could attend Bottega's web development
						bootcamp, just in time for everything to shut down, so it was all remote.
						About 2 months after completing my certification, I was able to land an
						apprenticeship with Avii, where I worked for a year, mainly in updating
						legacy .NET MVC enterprise products.
					</p>
					<p>Some of my skills:</p>

					<ul className="skills-container">
						<li>.NET</li>
						<li>C#</li>
						<li>React and React Native</li>
						<li>HTML, CSS, SCSS, JavaScript</li>
						<li>TSQL</li>
						<li>Git, in GitHub and Azure DevOps</li>
					</ul>

					<p>
						I don't know everything yet, but I have become an expert at finding answers
						to my questions. I love to learn and I'm eager to find a team to grow with
						and contribute to. If I seem like a good fit for a position with your
						company, my contact info is in the next tab! I hope to hear from you soon.
					</p>
				</div>
			</div>
		</div>
	);
}
