import React from 'react';
import './skills.css';

const PercentageBar = ({ percentage }) => {
    return (
        <div className="percentage-container">
            <div className="percentage-fill" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default PercentageBar;
