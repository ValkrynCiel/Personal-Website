import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors'


const ProjectWrapper = styled.div`
  flex-basis: 90%;
  display: flex;
  border-radius: 10px;
  border: 3px solid ${colors.burntOrange};
  flex-direction: column;
  margin-top: 50px;
`

const TitleDiv = styled.div`
  width: 90%
  margin: 20px auto;
  font-size: 30px;
  @media (min-width: 600px) {
    font-size: 40px;
  }
`
const DescriptionDiv = styled.div`
  width: 90%
  margin: auto;
  margin: 15px auto;
  font-size: 20px;
  line-height: 150%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
`
const Image = styled.img`
  max-width: 85%;
  margin: auto;
  border-radius: 15px;
`

class Project extends Component {
  render() {
    return(
      <ProjectWrapper>
        <TitleDiv>{this.props.title}</TitleDiv>
        <Image src={this.props.src} alt={this.props.alt}/>
        <DescriptionDiv>{this.props.children}</DescriptionDiv>
      </ProjectWrapper>
    )
  }
}

export default Project