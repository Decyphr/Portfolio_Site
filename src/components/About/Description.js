import React, { Component } from 'react'
import styled from "styled-components"
import { colors, fonts } from "../../assets/identity"

class Description extends Component {
  render() {
    return (
      <Desc maxWidth={this.props.maxWidth}>
          {this.props.children}
      </Desc>
    )
  }
}

const Desc = styled.div`
  max-width: ${props => props.maxWidth || `800px`};
  width: 100%;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 300;
`;


export default Description