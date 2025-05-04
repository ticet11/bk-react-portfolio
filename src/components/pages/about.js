import React from "react";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<div>
			<div className="content-page-wrapper two-column">
				<div className="left-column about-img"></div>
				<div className="right-column bio-content">
					<p>
						Hi, thanks for coming by. My name is Brian and I look forward to getting to
						know you! I'm originally from Upstate New York, but I spent most of my adult
						life out west, mainly in Utah. My wife and I started our family out there.
						It's also where I started my career in IT.
					</p>
					<p>
						My first software job was as an apprentice at Avii, a small startup, mainly
						updating legacy .NET products to work in modern browsers. After 6 months, I
						was promoted and hired on as a full-time software engineer.
					</p>
					<p>
						For my next position, I spent close to 3 years at Purple, the mattress
						company, yes. There, I was hired as a Software Integration Engineer and was
						later promoted to Software Engineer III. My main responsibilities on the
						team were building, monitoring, and maintaining integrations between
						external retail vendors and our internal systems, like recording Shopify
						orders in NetSuite, for example.
					</p>
					<p>
						In my spare time, if I’m not coding, I like working on my homelab, DIY car
						and home projects, and watching movies. Check out my letterboxd in the
						reviews tab, if you wanna see what I've been watching. It was kind of a
						hassle to build, but I like movies!
					</p>

					<div className="lists-container two-column">
						<div className="skills-container">
							<p>Some of my skills:</p>

							<ul className="skills-list">
								<li>Node.JS</li>
								<li>HTML, CSS, SCSS, JavaScript</li>
								<li>React</li>
								<li>.NET and C#</li>
								<li>Integrations and Automation</li>
								<li>Systems Administration (Windows & Linux)</li>
							</ul>
						</div>
						<div className="industries-container">
							<p>Pre-software Industries:</p>

							<ul className="industries-list">
								<li>Logistics</li>
								<li>Insurance</li>
								<li>Construction</li>
								<li>Retail</li>
								<li>Customer Care</li>
							</ul>
						</div>
					</div>

					<p>
						I don't know everything, yet, but I have become an expert at finding
						answers. I love to learn and I'm eager to find a team to grow with and
						contribute to. The stack doesn't matter nearly as much as the team, in my
						opinion. If I seem like a good fit for a position with your company, here's
						my <Link to={'/contact'}>contact info</Link>! I hope to hear from you soon.
					</p>
				</div>
			</div>
		</div>
	);
}
