import React from 'react'

const PageContainer = ({children}) => {
    return <div
        className="container z-depth-1" style={{
        flex: 1,
        backgroundColor: "white",
        zIndex: 1
    }}
    >
        {children}
    </div>
}

export default PageContainer
