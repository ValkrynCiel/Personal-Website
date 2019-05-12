import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const SkillDiv = styled.div`
  flex-basis: 26%;
  height: 0;
  padding-bottom: 26%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 7%;
  margin-bottom: 7%;
  border-radius: 10px;
  border: 3px solid ${colors.burntOrange};
  background-color: white;
  box-shadow: 4px 4px 3px rgb(107,83,28, 0.4);

  @media (min-width: 577px){
    flex-basis: 20%;
    padding-bottom 20%;
  }

  @media (min-width: 800px){
    flex-basis: 14%;
    padding-bottom: 14%;
  }
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
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: ${colors.burntOrange};
  border: 2px solid ${colors.burntOrange};
  border-radius: 0px 0px 5px 5px;
  p {
    color: white;
    line-height: 100%;
    width: 100%;
    display: inline-block;
    font-size: 1rem;
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