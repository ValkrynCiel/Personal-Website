import React, { Component } from 'react';
import styled from 'styled-components';
import Skill from './Skill';
import colors from './Colors';

import {
  javascriptInfo,
  pythonInfo,
  reactInfo,
  nodeInfo,
  postgresqlInfo,
  htmlInfo,
  cssInfo,
  bootstrapInfo,
  jqueryInfo,
  firebaseInfo,
  reduxInfo,
  flaskInfo
} from './Icons/Icons';

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${colors.warmGold}
  position: relative;
`
const SkillsDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 25px 0px;
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

class SkillsPage extends Component {

  render() {
    const skillOrder = [
      javascriptInfo, pythonInfo, reactInfo, reduxInfo, firebaseInfo, nodeInfo, flaskInfo, jqueryInfo, postgresqlInfo, htmlInfo, cssInfo, bootstrapInfo
    ];
    return (
      <SkillsWrapper>
        <TitleDiv>Skills</TitleDiv>
        <SkillsDiv>
        {skillOrder.map(({ name, icon }) => (
          <Skill key={name} name={name} icon={icon} />
        ))}
        </SkillsDiv>
      </SkillsWrapper>
    )
  }
}

export default SkillsPage