import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { colors, fonts } from "../assets/identity"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Display>
      <h1>Woah!</h1>
      <p>You've found the beautiful land of nothing!</p>
        <Link to="/">Here&apos;s a link back to salvation.</Link>
    </Display>
  </Layout>
)

const Display = styled.div`
  margin: 125px auto;
  width: 80%;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-weight: 300;
`;

export default NotFoundPage
