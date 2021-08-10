import React, { useState } from 'react';
import cx from 'classnames';
import { LoadingAnimation } from '..';

const CustomCardTitle = ({image, reveal, waves, children, page, ...props}) => {
    const classes = cx({
        'card-image': true,
        'waves-effect': waves,
        'waves-block': waves,
        [`waves-${waves}`]: waves,
    });

    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className={cx(classes)} {...props} >
            <div style={{
                height: 0,
                paddingTop: "100%",
                position: "relative",
                display: 'block',
            }}>
                {imageLoaded ? <></> : <LoadingAnimation style={{position: "absolute"}} />}
                <img
                    className={cx({activator: reveal})}
                    src={image}
                    alt="Изображение"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        width: "auto",
                        display: imageLoaded ? "block" : "none",
                    }}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <span className={cx('card-title')}>{children}</span>
        </div>
    )
};

export default CustomCardTitle;
