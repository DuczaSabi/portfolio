// Skill.js
import React from 'react';
import './Loading.css';

function Loading({className}) {
    return (
        <div className={`loading-container ${className}`}>
            <div className="loader"></div>
            <h1></h1>
        </div>
    );
}

export default Loading;
