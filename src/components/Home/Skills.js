import React, { Component } from 'react'
import styled from "styled-components"
import Skill from "./Skill"

import { FluidContainer } from '../Container'

class Skills extends Component {
  state = {
    skills: [
      `Graphic & Web Design`,
      `Mobile App Development`,
      `Front-End Development`,
      `User Interface Design`,
      `Back-End Development`
    ]
  }

  render() {
    const { skills } = this.state

    return (
      <FluidContainer style={{marginTop: `-50px`, padding: 50}}>
        <BadgeDiv>
          {skills.map(skill => <Skill label={skill}/>)}
        </BadgeDiv>
      </FluidContainer>
    )
  }
}

const BadgeDiv = styled.div`
  width: 80%;
  padding: 65px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export default Skills;