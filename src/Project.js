import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors'

const ProjectWrapper = styled.div`
  flex-basis: 90%;
  display: flex;
  border-radius: 10px;
  border: 3px solid ${colors.burntOrange};
  flex-direction: column;
`

const TitleDiv = styled.div`
  width: 90%
  margin: auto;
`
const DescriptionDiv = styled.div`
  width: 90%
  margin: auto;
`

class Project extends Component {
  render() {
    return(
      <ProjectWrapper>
        <TitleDiv>Test Title</TitleDiv>
        <DescriptionDiv>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum</DescriptionDiv>
      </ProjectWrapper>
    )
  }
}

export default Project