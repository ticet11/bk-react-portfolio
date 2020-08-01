import React from "react";
import axios from "axios";

export default class PortfolioDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {},
        };
    }

    UNSAFE_componentWillMount = () => {
        this.getPortfolioItemDetails();
    };

    getPortfolioItemDetails = () => {
        axios
            .get(
                `https://brikozub.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`
            )
            .then((response) => {
                this.setState({
                    portfolioItem: response.data.portfolio_item,
                });
            })
            .catch((error) => {
                console.error("getPortfolioItemDetails error", error);
            });
    };

    render() {
        const {
            banner_image_url,
            thumb_image_url,
            logo_url,
            category,
            description,
            name,
            url,
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        };

        const logoStyles = {
            width: "200px",
        };
        return (
            <div>
                <div className="portfolio-detail-wrapper">
                    <div style={bannerStyles} className="banner">
                        <img
                            style={logoStyles}
                            src={logo_url}
                            alt=""
                        />
                    </div>
                    <h1>{name}</h1>
                    <p className='link-instruction'>
                        The link below the description will take you
                        to GitHub, where you will find the code, a
                        link to a working version or download link,
                        and a video demonstration if available.
                    </p>
                    <div className="portfolio-detail-description-wrapper">
                        <div className="description">
                            {description}
                        </div>
                    </div>

                    <div className="bottom-content-wrapper">
                        <a
                            className="site-link"
                            target="_blank"
                            href={url}
                        >
                            Visit {name}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
