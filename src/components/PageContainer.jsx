import React from 'react'

const PageContainer = ({children}) => {
    return <div
        className="container" style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: "1.2rem",
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.2) 0px 1px 5px 0px"
    }}
    >
        {children}
    </div>
}

export default PageContainer
