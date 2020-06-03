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
                console.log(response);
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
        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        );
    }
}
