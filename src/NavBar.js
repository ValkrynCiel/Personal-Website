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
  justify-content: space-between;
`

const MenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${ props => props.name ? "auto" : "250px" };
`

const Link = styled.p`
  font-size: 18px;
  &:hover {
    color: ${colors.seafoam};
    cursor: pointer;
  }
`

class NavBar extends Component {

  render() {
    return (
      <NavBarContainer>
        <NavBarDiv>
            <MenuDiv name>
              <Link onClick={this.props.handleHomeScroll}>E</Link>
            </MenuDiv>
          <MenuDiv>
            <Link onClick={this.props.handleAboutScroll}>About</Link>
            <Link onClick={this.props.handleSkillsScroll}>Skills</Link>
            <Link onClick={this.props.handleProjectsScroll}>Projects</Link>
            <Link>Contact</Link>
          </MenuDiv>
        </NavBarDiv>
      </NavBarContainer>
    )
  }
}

export default NavBar