import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';
import Project from './Project';

const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${colors.warmGold}
`

class ProjectsPage extends Component {
  render() {
    return(
      <ProjectsDiv>
        <Project/>
        <Project/>
        <Project/>
      </ProjectsDiv>
    )
  }
}

export default ProjectsPage