import React, { Component } from 'react';
import styled from 'styled-components';

const SkillDiv = styled.div`
  width: 26%;
  height: 0;
  padding-bottom: 26%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 7%;
  margin-bottom: 7%;
  border-radius: 10px;
  border: 3px solid #00887A;
  background-color: white;
`
const IconContainer = styled.div`
  width: 65%;
  height: 65%;
  top: 7%;
  position: absolute;
  img {
    height: 100%;
    width: 100%;
  }
  svg {
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Name = styled.div`
  height: 20%;
  width: 100%;
  bottom: -1px;
  font-size: 4.5vmin;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #00887A;
  border: 2px solid #00887A;
  border-radius: 0px 0px 5px 5px;
  p {
    color: white;
    line-height: 100%;
    width: 100%;
    display: inline-block;
  }
`

class Skill extends Component {
  render() {
    
    return(
      <SkillDiv>
        <IconContainer>
          {this.props.icon}
        </IconContainer>
        <Name><p>{this.props.name}</p></Name>
      </SkillDiv>
    )
  }
}

export default Skill