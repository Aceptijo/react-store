import React from 'react';
import './loader.scss';

const Loader = () => {
    return (
        <div className={'container'}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
