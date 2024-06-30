import React from 'react';
import '../css/LoadingPage.css'; 

const LoadingPage = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingPage;
