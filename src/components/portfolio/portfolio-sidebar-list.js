import React from 'react';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            
            <div key={portfolioItem.id} className='portfolio-item-thumb'>
                <div className='portfolio-item-thumb-img'>
                    <img src={portfolioItem.thumb_image_url} alt=""/>
                </div>
                <h1 className='title'>
                    {portfolioItem.name}
                </h1>
                <h2>
                    {portfolioItem.id}
                </h2>
                <a onClick={() => props.handleDeleteClick(portfolioItem)} >X</a>
            </div>
        )
    })
    return (
        <div className="portfolio-sidebar-list-wrapper">
            {portfolioList}
        </div>
    );
}

export default PortfolioSidebarList;
