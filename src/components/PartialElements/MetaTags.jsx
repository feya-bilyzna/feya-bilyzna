import React from 'react'
import { Helmet } from 'react-helmet-async'
import packageJSON from './../../../package.json'
import { useTranslation } from "react-i18next"

export default function MetaTags({ title, description, image, keywords }) {
    const { t } = useTranslation()
    return <Helmet>
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={packageJSON.homepage} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={packageJSON.homepage} />
        <meta
            name="keywords"
            content={
                Array.isArray(keywords) ?
                    keywords.map(keyword => t(keyword)) :
                    keywords
            }
        >
        </meta>
    </Helmet>
}
