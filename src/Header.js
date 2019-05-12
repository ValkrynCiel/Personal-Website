import React, { Component } from 'react';
import styled from 'styled-components';
import imgSrc from './photo.jpg';
import colors from './Colors';

const HeaderDiv = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${colors.warmGold};
  position: relative;
  margin: auto;
  margin-top: 50px;
  max-width: 900px;
`
const ImageBorderDiv = styled.div`
  margin-top: 50px;
  height: 210px;
  width: 210px;
  border-radius: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${colors.burntOrange};
`

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: white;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: -13px;
    left: -47px;
    width: 140%; 
    height: 140%; 
    object-fit: contain;
  }

`
const GreetingContainer = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 30px;
`
const MainGreeting = styled.div`
  text-align: center;
    font-size: 250%
  color: ${colors.burntOrange};

  @media (min-width: 900px){
    font-size: 320%;
  }
`

// const MinorGreeting = styled.div`
//   text-align: center;
//   font-size: 30px;
//   color: white;
// `

const DownButton = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: -30px;
  background-color: ${colors.seafoam}
  display: flex;
  justify-content: center;
  align-items: bottom;

  span {
    font-size: 60px;
    color: ${colors.darkSeafoam};
    position: relative;
    top: 3px;
  }

  &:hover {
    background-color: ${colors.darkSeafoam}
    cursor: pointer
    span {
      color: ${colors.seafoam}
    }
  }
`

class Header extends Component {
  render() {
    return(
      <HeaderDiv>
        <ImageBorderDiv>
          <ImageContainer><img src={imgSrc} alt="me"/></ImageContainer>
        </ImageBorderDiv>
        <GreetingContainer>
          <MainGreeting>Hi! I'm Ethan :)</MainGreeting>
          {/* <MinorGreeting>I build front-end applications</MinorGreeting> */}
        </GreetingContainer>
        <DownButton onClick={this.props.handleScroll}><span className="fas fa-angle-down"></span></DownButton>
      </HeaderDiv>
    )
  }
}

export default Header