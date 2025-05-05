import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
	return (
		<div className="content-page-wrapper two-column">
			<div className="left-column contact-img"></div>
			<div className="right-column contact-content">
				<div className="contact-bullet-points one-column">
					<div className="bullet-point-group">
						<div className="icon">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/briankozub"
							>
								<FontAwesomeIcon icon={["fab", "linkedin"]} />
							</a>
						</div>
						<div className="text">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/briankozub"
							>
								linkedin.com/in/briankozub
							</a>
						</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<a
								target="_blank"
								href="https://www.github.com/ticet11"
							>
								<FontAwesomeIcon icon={["fab", "github"]} />
							</a>
						</div>
						<div className="text">
							<a
								target="_blank"
								href="https://www.github.com/ticet11"
							>
								github.com/ticet11
							</a>
						</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<a
								target="_blank"
								href="mailto:brian@briankozub.com"
							>
								<FontAwesomeIcon icon="paper-plane" />
							</a>
						</div>
						<div className="text">
							<a
								target="_blank"
								href="mailto:brian@briankozub.com"
							>
								brian@briankozub.com
							</a>
						</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<a target="_blank" href="tel:385-722-0126">
								<FontAwesomeIcon icon="mobile-alt" />
							</a>
						</div>
						<div className="text">
							<a target="_blank" href="tel:385-722-0126">
								(385) 722-0126
							</a>
						</div>
					</div>
					<div className="bullet-point-group">
						<div className="icon">
							<a
								target="_blank"
								href="https://goo.gl/maps/Dqy7sq9wEpd7erJ16"
							>
								<FontAwesomeIcon icon="map-marked-alt" />
							</a>
						</div>
						<div className="text">
							<a
								target="_blank"
								href="https://goo.gl/maps/Dqy7sq9wEpd7erJ16"
							>
								Rochester, NY
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
