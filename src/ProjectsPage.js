import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';
import Project from './Project';

import ballSrc from './Icons/Test.png';
import relishSrc from './Icons/Relish.png';
import microblogSrc from './Icons/Microblog.png';

const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${colors.warmGold}
  position: relative;

  span {
    display: inline-block;
    margin-top: 10px;
  }
  b {
    font-weight:700;
  }
`
const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 50px;
  margin: auto;
`

const TitleDiv = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 0;
  margin-left: 10%;
  padding: 10px 20px;
  color: ${colors.lightGold}
  font-size: 3rem;
  background-color: ${colors.darkSeafoam}
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgb(107,83,28, 0.4);

  @media (min-width: 600px){
    font-size: 4rem;
    top: -3.5rem
  }
`

class ProjectsPage extends Component {
  render() {
    return(
      <ProjectsWrapper>
        <TitleDiv>Projects</TitleDiv>
        <ProjectsDiv>
          <Project title='The Relish CMS' src={relishSrc} alt='relish'>
          A GUI that allows admins to create, edit, delete, and reorder sports channels to be viewed in iOS mobile applications.<br/>
          <span>
          <b>Technologies:</b> React-beautiful-dnd, Firebase
          </span>
          </Project>
          <Project title='Orbs' src={ballSrc} alt='ball'>
          The beginnings of a physics simulator in which users can create orbs of different colors that bounce indefinitely.<br/>
          <span>
          <b>Technologies:</b>  vanilla Javascript and canvas
          </span>
          </Project>
          <Project title='Microblog' src={microblogSrc} alt='microblog'>A frontend blogging app in which users can post, edit, and delete stories. Stories can be upvoted and downvoted.<br/>
          <span>
          <b>Technologies:</b>  React, Redux, Bootstrap
          </span></Project>
        </ProjectsDiv>
      </ProjectsWrapper>
    )
  }
}

export default ProjectsPage