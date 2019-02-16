import React, { Component } from 'react'
import { FluidContainer, Heading } from "../Container"
import { colors } from "../../assets/identity"
import styled from "styled-components"

import Description from "./Description"
import ProficienciesMenu from './ProficienciesMenu'

class AboutSection extends Component {
  render() {
    return (
      <FluidContainer id="about" bgColor="transparent" style={{ flexDirection: `column` }} height={`75vh`} justify={`space-between`}>
        <Description>
          <Heading>Background</Heading>
          <p>
            I’m a self-taught developer with a background in marketing. 
            After graduating from college, I found a passion for designing 
            and building user interfaces that help make life simple.
          </p>
        </Description>
        <Description>
          <HideOnSmallScreen>
            <Heading color={colors.blue}>Skills</Heading>
            <ProficienciesMenu />
          </HideOnSmallScreen>
        </Description>
      </FluidContainer>
    )
  }
}

const HideOnSmallScreen = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

export default AboutSection
