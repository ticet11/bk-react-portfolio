import React, { Component } from "react";

export default class PorfolioManager extends Component {
    render() {
        return (
            <div className='portfolio-manager-wrapper'>
                <div className="left-column">
                    <form action="">
                        <input type="text" placeholder='Portfolio Form' />
                    </form>
                </div>
                <div className="right-column">
                    <p>Portfolio Sidebar</p>
                </div>
            </div>
        );
    }
}
