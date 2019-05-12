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
        <TitleDiv><h1>React developer living in San Francisco</h1></TitleDiv>
        <DescDiv><p>I had never imagined myself working as a software engineer, but one day, I quit my job as a restaurant server to give coding the old college try. I still remember the magical moment my laptop greeted me when I typed "hello world" for the first time. I was hooked. </p></DescDiv>
        <DescDiv><p>Since then, I've graduated from Rithm School and have honed my skills by exploring topics that ignite my curiosity and diligently working to understand and overcome every challenge I face. I have experience in JavaScript, Python, PostgreSQL as well as various frameworks, and, as I'm sure you can tell, I get pretty excited when I learn new technologies and think of ways to implement them!</p></DescDiv>
      </AboutDiv>
    )
  }
}

export default AboutPage