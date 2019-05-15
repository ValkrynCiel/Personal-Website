import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const LinkWrapper = styled.div`
  width: ${props => props.length > 1 ? '120px': 'auto'}
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-right: 30px;
  
  @media (max-width: 600px) {
    margin-top: 10px;
    margin-right: auto;
    width: ${props => props.length > 1 ? '150px': 'auto'};
    justify-content: space-between;
  }
`

const ProjectLink = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: ${colors.seafoam}
  display: flex;
  align-items: center;
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

  @media (min-width: 600px) {
    height: 50px;
    width: 50px;
    .fa-github {
      font-size: 40px;
    }
    .fa-link {
      font-size: 30px;
    }
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