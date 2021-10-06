import React from 'react'

const PageContainer = ({children}) => {
    return <div
        className="container z-depth-1" style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: "5.5rem",
    }}
    >
        {children}
    </div>
}

export default PageContainer
