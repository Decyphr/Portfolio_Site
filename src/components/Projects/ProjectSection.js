import React, { Component } from 'react'
import { FluidContainer, Heading } from '../Container'
import Grid from '@material-ui/core/Grid'

import { colors } from '../../assets/identity'
import ProjectCard from './ProjectCard';

class ProjectSection extends Component {
  state = {
    projects: [`Made with React`, `Designs`, `Other Dev Projects`]
  }

  render() {
    const { projects } = this.state

    return (
      <FluidContainer id="projects" height="auto">
        <Heading color={colors.dark}>Projects</Heading>
        {/* Re-Factor into Material UI Grid */}
        <Grid container spacing={24}>
          {projects.map(project => (
              <Grid item xs={12} md={6} lg={4}>
                <ProjectCard title={project}/>
              </Grid> 
            )
          )}
        </Grid>
      </FluidContainer>
    )
  }
}

export default ProjectSection;