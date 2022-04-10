import React from 'react';
import { Preloader } from 'react-materialize';


const LoadingAnimation = ({ style, empty }) => {
    return <div style={{
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
    }}>
        {
            empty ?
                <div style={{ height: 64 }}></div> :
                <Preloader size="big" flashing />
        }
    </div>
}

export default LoadingAnimation
