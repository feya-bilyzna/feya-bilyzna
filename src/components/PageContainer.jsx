import React from 'react';

const PageContainer = ({ children }) => {
    return (
        <div className="container" style={{ flex: 1 }}>
            {children}
        </div>
    );
};

export default PageContainer;
