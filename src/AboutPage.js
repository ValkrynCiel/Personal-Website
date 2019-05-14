import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const AboutDiv = styled.div`
  color: ${colors.darkSeafoam}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  h1 {
    font-size: 30px;
  } 
  p {
    font-size: 20px;
    margin: auto;
    margin-top: 50px;
  }

  @media (min-width: 600px){
    h1 {
      font-size: 40px;
    } 
    p {
      margin-top: 70px;
      font-size: 22px;
    }
  }

`
const TitleDiv = styled.div`
    display: flex;
`
const DescDiv = styled.div`
  display: flex;
  line-height: 200%;
`
class AboutPage extends Component {

  render() {
    return(
      <AboutDiv>
        <TitleDiv><h1>React developer based in San Francisco</h1></TitleDiv>
        <DescDiv><p>I never imagined myself enjoying sitting in front of a computer and typing while loops and interpolated strings, but I still remember the heady rush I got when my laptop's console first greeted me with "hello world" &#8212; I definitely was holding my breath.</p></DescDiv>
        <DescDiv><p>It wasn't long after that I quit my job as a restaurant server to pursue a career in software development. I've since graduated from Rithm School and have honed my skills by exploring topics that ignite my curiosity and diligently working to understand and overcome every challenge I face. I have experience in working with both front and backend frameworks but I have particular interest and focus on building applications in React. I'm happiest when I learn new technologies and think of ways to implement them!</p></DescDiv>
      </AboutDiv>
    )
  }
}

export default AboutPage