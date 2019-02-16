import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, fonts } from '../assets/identity'

const Foot = styled.div`
  width: 100%;
  text-align: center;
  background: ${colors.white};
  color: ${colors.dark};
  padding: 25px;
  font-family: ${fonts.primary};
  font-size: 16px;
  font-weight: 500;
`;

export default class Footer extends Component {
  render() {
    return (
      <Foot>
        &copy; Copyright {new Date().getFullYear()} | Blake Hartman
      </Foot>
    )
  }
}
