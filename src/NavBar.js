import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const NavBarContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center
  color: ${colors.lightGold};
  background-color: ${colors.darkSeafoam};
  z-index: 1000;
  box-shadow: 0 4px 3px rgba(30,60,30,.3)
`
const NavBarDiv = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  
`

const MenuDiv = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (min-width: 500px) {
    max-width: 500px;
  }

  @media (min-width: 800px) {
  max-width: 700px;
  }

  @media (min-width: 1080px) {
    max-width: 900px;
  }
`

const Link = styled.div`
  font-size: 18px;
  flex-basis: 20%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-bottom: 2px solid transparent;
  &:hover {
    color: ${colors.seafoam};
    cursor: pointer;
    border-bottom: 2px dashed ${colors.seafoam};
  }
  p {
    margin: auto;
  }
`

class NavBar extends Component {

  render() {
    return (
      <NavBarContainer>
        <NavBarDiv>
            {/* <MenuDiv name>
              <Link onClick={this.props.handleHomeScroll}>E</Link>
            </MenuDiv> */}
          <MenuDiv>
            <Link onClick={this.props.handleAboutScroll}>About</Link>
            <Link onClick={this.props.handleSkillsScroll}>Skills</Link>
            <Link onClick={this.props.handleProjectsScroll}>Projects</Link>
            <Link onClick={this.props.handleContactScroll}>Contact</Link>
          </MenuDiv>
        </NavBarDiv>
      </NavBarContainer>
    )
  }
}

export default NavBar