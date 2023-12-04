import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import favicon from '/static/favicon.ico'

const Head = ({ children }) => {
    const { site: { siteMetadata } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `)

    return (
        <>
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <link rel="icon" href={favicon} />
            {children}
        </>
    )
}

export default Head