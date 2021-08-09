import React from 'react';

const LoadingAnimation = ({absolutePosition, style}) => {
    return <div
        style={style}
        className="load-spinner-wrapper"
    >
        <div className="load-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default LoadingAnimation
