import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors'
import ProjectLinkContainer from './ProjectLinkContainer';


const ProjectWrapper = styled.div`
  flex-basis: 90%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  margin-top: 50px;
`

const TitleDiv = styled.div`
  width: 90%
  margin: 20px auto;
  font-size: 40px;
  color: ${colors.burntOrange}
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 35px;
    jusify-content: space-around;
    flex-direction: column;
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
  border: 4px inset ${colors.darkSeafoam}
  overflow: hidden;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

class Project extends Component {
  render() {
    const { title, src, alt, links} = this.props.details;
    return(
      <ProjectWrapper>
        <TitleDiv>
          <p>{title}</p>
          <ProjectLinkContainer links={links}/>
        </TitleDiv>
        <ImageContainer>
          <Image src={src} alt={alt}/>
        </ImageContainer>
        <DescriptionDiv>{this.props.children}</DescriptionDiv>
      </ProjectWrapper>
    )
  }
}

export default Project