import React from 'react';
import './loadinganimation.css'; // assuming you'll put your CSS in this file

const LoadingAnimation = () => {
    return (
        <div className="loading-animation-container">
            <div className="circ">
                <div className="load">Loading . . . </div>
                <div className="hands"></div>
                <div className="body"></div>
                <div className="head">
                    <div className="eye"></div>
                </div>
            </div>
        </div>
    );
}


export default LoadingAnimation;
