import React, { Component } from 'react'
import ProfilePic from './ProfilePic'
import styled from "styled-components"
import { colors, fonts } from "../../assets/identity"
import { Container } from "../Container"

class HomeSection extends Component {
  render() {
    return (
      <FixedContainer align={`flex-end`} style={{ marginTop: 85 }}>
        <ProfilePic />
        <Intro>
          <Greeting>
            Hey,<br/>
            I&apos;m Blake
          </Greeting>
          <Slogan>
            I build experiences that make life simple.
          </Slogan>
        </Intro>
    </FixedContainer>
    )
  }
}

const FixedContainer = styled(Container)`
  @media (min-width: 980px) {
    height: 45vh;
  }
`;

const Intro = styled.div`
  padding: 50px 25px;
`;

const Greeting = styled.h1`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 50px;
  line-height: 110%;
  margin-bottom: 10px;
  color: ${colors.white};
`;

const Slogan = styled.p`
  font-family: ${fonts.secondary};
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${colors.blue};

  &:before {
    content: " ";
    display: inline-block;
    width: 65px;
    border-top: 15px solid ${colors.blue};
    margin-right: 10px;
  }
`;

export default HomeSection