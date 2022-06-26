import React from 'react'

const ProductDescription = ({ text, descriptionStyle }) => {
    return (
        <div style={descriptionStyle}>{
            text?.split('⚡').map((sentence, index) =>
                <p key={index} style={{ marginBottom: 0, marginTop: 0 }}>
                    {sentence}
                </p>)
        }</div>
    )
}

export default ProductDescription
