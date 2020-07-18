import React from 'react';
import { useContext } from 'react';
import { PwaContext } from '../../PwaContext';
import '../portfolio/Portfolio.css'

const Portfolio = () => {
    const [pwaData] = useContext(PwaContext)
    const portfolio = pwaData?.portfolio
    return (
        <div className="portfolio-section section-shadow">
            <h1 className="section-title">{portfolio?.portfolioHeading}</h1>
            <div className="portfolio-items">
            {
                portfolio?.portfolioItems.map( (portfolioItem, index) => {
                    return(
                        <div className="single-portfolio-item" key={index}>
                            <img src={portfolioItem.portfolioImg} alt="Portfolio"/>
                            <a rel="noopener noreferrer"  target="_blank" href={portfolioItem.portfolioUrl} className="portfolio-info">
                                <div className="portfolio-inner">
                                    <h4>{portfolioItem.portfolioName}</h4>
                                    <span>{portfolioItem.portfolioType}</span>
                                </div>
                            </a>
                        </div>
                    )
                } )
            }
            </div>
        </div>
    );
};

export default Portfolio;