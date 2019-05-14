import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors'


const ProjectWrapper = styled.div`
  flex-basis: 90%;
  display: flex;
  border-radius: 10px;
  // border: 3px solid ${colors.burntOrange};
  flex-direction: column;
  margin-top: 50px;
  
`

const TitleDiv = styled.div`
  width: 90%
  margin: 20px auto;
  font-size: 30px;
  color: ${colors.burntOrange}
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
  color: ${colors.darkSeafoam}
  @media (min-width: 600px) {
    font-size: 22px;
  }
`
const ImageContainer = styled.div`
  width: 85%;
  border-radius: 15px;
  margin: auto;
  border: 2px solid ${colors.darkSeafoam}
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

class Project extends Component {
  render() {
    return(
      <ProjectWrapper>
        <TitleDiv>{this.props.title}</TitleDiv>
        <ImageContainer>
          <Image src={this.props.src} alt={this.props.alt}/>
        </ImageContainer>
        <DescriptionDiv>{this.props.children}</DescriptionDiv>
      </ProjectWrapper>
    )
  }
}

export default Project