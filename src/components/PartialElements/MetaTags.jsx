import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function MetaTags({ title, description, image, type, canonicalUrl, keywords }) {
    return <Helmet>
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={keywords}></meta>
    </Helmet>
}
