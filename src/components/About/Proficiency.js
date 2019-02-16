import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../assets/identity';

class Proficiency extends Component {
  render() {
    return (
      <Main>
        <Title>{this.props.title}</Title>
        <XPBar value={this.props.xp} />
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 25px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
  margin: 15px;
  width: 125px;
`;

const XPBar = styled.div`
  background: ${colors.blue};
  height: 10px;
  width: ${props => props.value + 'px' || 0};
  border-radius: 5px;
  margin-top: 5px;
`;

Proficiency.propTypes = {
  title: PropTypes.string.isRequired,
  xp: PropTypes.number.isRequired,
}

export default Proficiency;
