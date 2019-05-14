import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';

const ContactWrapper = styled.div`
  width: 200px;
  display: flex;
  margin: auto;
`
const ContactLink = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border: 2px solid ${colors.lightGold}
  margin: 10px auto;
  text-align: center;
  display: flex;
  &:hover {
    border: 2px solid ${colors.seafoam};
    color: ${colors.seafoam};
    cursor: pointer;
  }
  i {
    margin: auto
    display: inline-block;
    &:vistied {
      color: ${colors.lightGold};
    }
  }

  .fa-github {
    left: -.5px;
    font-size: 63px;
    position: relative;
  }

  .fa-linkedin-in {
    font-size: 38px;
  }
`

class ContactLinkContainer extends Component {
  render() {
    return(
      <ContactWrapper>
        <ContactLink 
          onClick={()=> window.open("https://www.linkedin.com/in/e-shen/", "_blank")}>
          <i className="fab fa-linkedin-in"></i>
        </ContactLink>
        <ContactLink 
          onClick={()=> window.open("https://github.com/ValkrynCiel/", "_blank")}>
          <i className="fab fa-github"></i>
        </ContactLink>
      </ContactWrapper>
    )
  }
}

export default ContactLinkContainer