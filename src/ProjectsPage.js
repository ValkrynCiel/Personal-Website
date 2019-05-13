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
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum
          </Project>
          <Project title='Orbs' src={ballSrc} alt='ball'>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum
          </Project>
          <Project title='Microblog' src={microblogSrc} alt='microblog'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum</Project>
        </ProjectsDiv>
      </ProjectsWrapper>
    )
  }
}

export default ProjectsPage