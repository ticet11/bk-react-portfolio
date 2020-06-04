import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPic from "../../../static/assets/images/contact/phoneMan.jpg";

export default function Contact() {
    return (
        <div className="content-page-wrapper two-column">
            <div
                style={{
                    background: "url(" + contactPic + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="left-column"
            ></div>
            <div className="right-column">
                <div className="contact-bullet-points one-column">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/briankozub">
                                <FontAwesomeIcon
                                    icon={["fab", "linkedin"]}
                                />
                            </a>
                        </div>
                        <div className="text">
                            LinkedIn.com/in/briankozub
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <a href="https://www.github.com/ticet11">
                                <FontAwesomeIcon
                                    icon={["fab", "github"]}
                                />
                            </a>
                        </div>
                        <div className="text">github.com/ticet11</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <a href="mailto:brian@briankozub.com">
                                <FontAwesomeIcon icon="paper-plane" />
                            </a>
                        </div>
                        <div className="text">
                            brian@briankozub.com
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <a href="tel:385-722-0126">
                                <FontAwesomeIcon icon="mobile-alt" />
                            </a>
                        </div>
                        <div className="text">(385) 722-0126</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <a href="#">
                                <FontAwesomeIcon icon="map-marked-alt" />
                            </a>
                        </div>
                        <div className="text">
                            Sandy, UT (Open to remote opportunities)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
