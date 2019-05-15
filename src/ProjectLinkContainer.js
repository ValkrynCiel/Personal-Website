import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const LinkWrapper = styled.div`
  width: ${props => props.length > 1 ? '130px': 'auto'}
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-right: 30px;
  
  @media (max-width: 600px) {
    width: ${props => props.length > 1 ? '150px': 'auto'}
    margin-top: 10px;
    margin-right: auto;
    justify-content: space-between;
  }
`

const ProjectLink = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: ${colors.seafoam};
  display: flex;
  align-items: center;
  border: 2px solid ${colors.darkSeafoam};
  &:hover {
    cursor: pointer;
  }
  i {
    color: ${colors.darkSeafoam}
    margin: auto;
    display: inline-block;
  }

  .fa-github {
    font-size: 35px;
  }

  .fa-link {
    font-size: 22px;
  }
`

class ProjectLinkContainer extends Component {
  render() {
    return(
      <LinkWrapper length={this.props.links.length}>
        {this.props.links.map(([icon, url]) => (
          <ProjectLink key={url} onClick={()=> window.open(url, "_blank")}>
            <i className={icon === 'link' ? 'fas fa-link' : 'fab fa-github'}></i>
          </ProjectLink>))}
      </LinkWrapper>
    )
  }
}

export default ProjectLinkContainer