import React from 'react';
import '../App.css';

function SkeletonLoader({ width, height, style, circle }) {
    return (
        <div
            className={`skeleton ${circle ? 'skeleton-circle' : ''}`}
            style={{ width, height, ...style }}
        ></div>
    );
}

export default SkeletonLoader;
