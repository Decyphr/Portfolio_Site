import PropTypes from "prop-types"
import React from "react"
import Navigation from './Navigation/Navigation'

import { colors } from "../assets/identity"

const Header = ({ siteTitle }) => (
  <header>
    <Navigation brand={ siteTitle } color={colors.white} dark={false}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
