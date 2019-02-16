import React, { Component } from 'react'
import styled from "styled-components"
import Badge from "./Badge"

import { colors, fonts } from "../../assets/identity"

const Container = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const SkillLabel = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 500;
  text-align: center;
  color: ${colors.dark};
  width: 150px;
  margin: 10px;

  &:after {
    content: " ";
    display: block;
    margin: 5px auto;
    width: 50px;
    border: 2px solid ${colors.dark}; 
    border-radius: 6px;
  }
`;

class Skill extends Component {
  render() {
    return (
      <Container>
        <Badge/>
        <SkillLabel>
          {this.props.label}
        </SkillLabel>
      </Container>
    )
  }
}


export default Skill