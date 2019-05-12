import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SeparatorDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnchorDiv = styled.div`
  width: 20%;
  height: 3px;
  border-radius: 2px;
  background-color: grey;
`
const SectionDiv = styled.div`
  width: 100%;
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: auto;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.aboutRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.scrollToAboutRef = this.scrollToAboutRef.bind(this);
    this.scrollToSkillsRef = this.scrollToSkillsRef.bind(this);
    this.scrollToProjectsRef = this.scrollToProjectsRef.bind(this);
    this.scrollHome = this.scrollHome.bind(this);
  }

  scrollHome() {
    window.scrollTo(0, -50);
  }

  scrollToAboutRef() {
    window.scrollTo(0, this.aboutRef.current.offsetTop-50);
  }

  scrollToSkillsRef() {
    window.scrollTo(0, this.skillsRef.current.offsetTop-50);
  }

  scrollToProjectsRef() {
    window.scrollTo(0, this.projectsRef.current.offsetTop-50);
  }

  render() {
    return (
      <AppWrapper>
        <NavBar 
          handleAboutScroll={this.scrollToAboutRef}
          handleSkillsScroll={this.scrollToSkillsRef}
          handleProjectsScroll={this.scrollToProjectsRef}
          handleHomeScroll={this.scrollHome}/>
        <Header handleScroll={this.scrollToAboutRef} />
        <SeparatorDiv>
          <AnchorDiv ref={this.aboutRef}/>
        </SeparatorDiv>
        <SectionDiv >
          <AboutPage/>
        </SectionDiv>
        <SeparatorDiv>
          <AnchorDiv ref={this.skillsRef}/>
        </SeparatorDiv>
        <SectionDiv>
          <SkillsPage/>
        </SectionDiv>
        <SeparatorDiv>
          <AnchorDiv ref={this.projectsRef}/>
        </SeparatorDiv>
        <SectionDiv>
          <ProjectsPage/>
        </SectionDiv>
      </AppWrapper>
    );
  }
}

export default App;
