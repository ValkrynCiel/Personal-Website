import React, { Component } from 'react';
import styled from 'styled-components';
import Skill from './Skill';
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

const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #D3E3FC
`

class SkillsPage extends Component {

  render() {
    const skillOrder = [
      javascriptInfo, pythonInfo, reactInfo, reduxInfo, firebaseInfo, nodeInfo, flaskInfo, jqueryInfo, postgresqlInfo, htmlInfo, cssInfo, bootstrapInfo
    ];
    return (
      <SkillsDiv>
      {skillOrder.map(({ name, icon }) => <Skill key={name} name={name} icon={icon} />)}
      </SkillsDiv>
    )
  }
}

export default SkillsPage