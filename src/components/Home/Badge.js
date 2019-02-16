import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Badge = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Badge_Dark.png"}) {
          childImageSharp {
            fixed(width: 100, height: 112) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Badge
