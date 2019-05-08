import React, { Component } from 'react';
import styled from 'styled-components';
import imgSrc from './photo.jpg';

const HeaderDiv = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #77A6F7;
  position: relative;
  margin-top: 50px;
`

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: white;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  img {
    position: absolute;
    top: -13px;
    left: -47px;
    width: 140%; /* or any custom size */
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
  margin-bottom: 50px;
`
const MainGreeting = styled.div`
  text-align: center;
  font-size: 40px;
  color: #D3E3FC;
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
  background-color: #00887A
  display: flex;
  justify-content: center;
  align-items: bottom;
  &:hover {
    background-color: red
    cursor: pointer
  }
  span {
    font-size: 60px;
    color: #D3E3FC;
    position: relative;
    top: 3px;
  }
`

class Header extends Component {
  render() {
    return(
      <HeaderDiv>
        <div><ImageContainer><img src={imgSrc} alt="me"/></ImageContainer></div>
        <GreetingContainer>
          <MainGreeting>Hello! I'm Ethan</MainGreeting>
          {/* <MinorGreeting>I build front-end applications</MinorGreeting> */}
        </GreetingContainer>
        <DownButton onClick={this.props.handleScroll}><span className="fas fa-angle-down"></span></DownButton>
      </HeaderDiv>
    )
  }
}

export default Header