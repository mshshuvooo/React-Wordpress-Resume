import React from 'react';
import '../notFound/NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-section section-shadow">
            <div className="section-top">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <a href="/" className="boxed-btn">Go To Home</a>
            </div>
        </div>
    );
};

export default NotFound;