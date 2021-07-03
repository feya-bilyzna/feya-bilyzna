import React from 'react';
import {Footer} from "react-materialize"

const FooterComp = () => {
    return (
        <Footer
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Google maps</a></li>
                </ul>}
        >
            <h5 className="grey-text text-lighten-4">
                Ссылки на соц сети:
            </h5>
        </Footer>
    );
};

export default FooterComp;
