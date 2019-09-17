import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';
import Project from './Project';

import mineSrc from './Icons/minesweeper.png';
import relishSrc from './Icons/Relish.png';
import microblogSrc from './Icons/Microblog.png';
import boardSrc from './Icons/Hunty Board.png';

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

const projects = {
  relish: {
    title: 'The Relish CMS',
    src: relishSrc,
    alt: 'Drag and Drop containers built with React',
    links: []
  },
  microblog: {
    title: 'Microblog',
    src: microblogSrc,
    alt: 'Front page of Microblog',
    links: [
      ['github', 'https://github.com/ValkrynCiel/redux-microblog'],
      ['link', 'http://microblog-less.herokuapp.com/']
    ]
  },
  board: {
    title: 'Hunty Board',
    src: boardSrc,
    alt: 'Hunty Board GUI',
    links: [
      ['github', 'https://https://github.com/ValkrynCiel/jQuery_huntr_board'],
      ['link', 'https://valkrynciel.github.io/jQuery_huntr_board/']
    ]
  },
  minesweeper: {
    title: 'Minesweeper',
    src: mineSrc,
    alt: 'game of minesweeper in progress',
    links: [
      ['github', 'https://github.com/ValkrynCiel/minesweeper'],
      ['link', 'https://valkrynciel.github.io/minesweeper/']
    ]
  }
}

class ProjectsPage extends Component {
  render() {
    return(
      <ProjectsWrapper>
        <TitleDiv>Projects</TitleDiv>
        <ProjectsDiv>
          <Project details={projects.relish}>
          As part of my internship The Relish, I built a GUI for admins to create, edit, delete, and reorder sports channels to be viewed in iOS mobile applications. I also improved the response speed of several pages that patched data in Firebase by 70% by connecting key components to Redux store. The codebase made use of Redux-thunk, React-beautiful-dnd, and Material-ui.<br/>
          <span>
          <b>Technologies:</b> React, Firebase, Redux
          </span>
          </Project>
          <Project details={projects.board}>
          A Huntr Board clone. Users can add new jobs, edit job information, and delete jobs as well as sort them between columns. Columns can be dragged and sorted. Column titles can be added and edited to suit individual needs. <br/>
          <span>
          <b>Technologies:</b> jQuery UI, HTML5, CSS3
          </span>
          </Project>
          <Project details={projects.minesweeper}>
          Classic game with a retro style. Players win by clearing all cells without mines in them. Flags can be used to mark mines.<br/>
          <span>
          <b>Technologies:</b>  React, styled components
          </span>
          </Project>
          <Project details={projects.microblog}>A blogging app in which users can post, edit, and delete stories. Stories can be upvoted or downvoted and are ordered accordingly on the homepage.<br/>
          <span>
          <b>Technologies:</b>  React, Redux, Node.js, Bootstrap
          </span></Project>
        </ProjectsDiv>
      </ProjectsWrapper>
    )
  }
}

export default ProjectsPage