import React from 'react';
import {MediaBox} from "react-materialize";

const MediaBoxTest = () => {
    return (
        <MediaBox
            id="MediaBox_7"
            options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
            }}
        >
            <img
                alt="Бельё"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABdCAMAAADnoch9AAAAIVBMVEX///8AAADAwMCAgIAAgAAAAP//AP//AAAA/wAA//8AAIDGizWLAAAA7klEQVR4nO3XSQ6EIBQAUUDs6f4HbkWhh7UJqZ+qFbryCQFNyWxSOVaNNPudXp8kQjvpsxSX2Y9zRTl9z9QSwXSQytmSApgGqdZGCmDqpPqouZS+taMbpLqTSgmwBY6Fl5soFGlrXVc+aJDujfSMRLrd2yy9Zj/OFXXSbsq/5y61QdpM2zDQ9tDPo0Ck0i4ibeJ/N9gdPxfnOIf5IAqWJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCEkiJImQJEKSCAUjvQGCSAKGHVw/AgAAAABJRU5ErkJggg=="
                width="275"
            />
        </MediaBox>
    );
};

export default MediaBoxTest;