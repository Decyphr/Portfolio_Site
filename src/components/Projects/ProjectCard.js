import React, { Component } from 'react'
import styled from "styled-components"
import { colors } from '../../assets/identity';


const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px ${colors.dark};
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: ${props => props.hoverColor || colors.dark};
    color: ${colors.white};
  }

  @media (max-width: 480px) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`;

class ProjectCard extends Component {
  render() {
    return (
      <Card>
        <h3>{this.props.title}</h3>
      </Card>
    )
  }
}

export default ProjectCard