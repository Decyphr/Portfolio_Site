import React, { Component } from 'react'
import Proficiency from './Proficiency'
import styled from 'styled-components'

class ProficienciesMenu extends Component {
  render() {

    return (
      <Box> 
        <div>
          <Proficiency title="JavaScript" xp={200}/>
          <Proficiency title="HTML/CSS" xp={250}/>
          <Proficiency title="ReactJS" xp={200}/>
        </div>
        <div>
          <Proficiency title="Adobe CC" xp={285}/>
          <Proficiency title="MongoDB" xp={185}/>
          <Proficiency title="ExpressJS" xp={150}/>
        </div>
      </Box>
    )
  }
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default ProficienciesMenu