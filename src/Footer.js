import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './Colors';
import resume from './Resume.pdf';
import ContactLinkContainer from './ContactLinkContainer'

const FooterWrapper = styled.div`
  background-color: ${colors.darkSeafoam}
  height: 400px;
  width: 100vw;
  margin-top: 150px;
  color: ${colors.lightGold}
  display: flex;
`

const ContactContainer = styled.div`
  max-width: 810px;
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 3px dashed ${colors.seafoam}
  text-align: center
  border-radius: 10px;
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 22px;
    line-height: 200%;
  }

  a {
    text-decoration: none;
    &:link {
      color: ${colors.lightGold}
    }
    &:visited {
      color: ${colors.lightGold}
    }
    &:hover {
      color: ${colors.seafoam}
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 18px;
    }
  }
`

const DetailContainer = styled.div`

`

class Footer extends Component {
  render() {
    return(
      <FooterWrapper>
        <ContactContainer>
          <h1>Contact</h1>
          <DetailContainer>
          <p><a href={resume} rel="noreferrer noopener" target="_blank">Link to resume <i className="fas fa-external-link-alt"></i></a></p>
          <p>email: ethanshen.wu@gmail.com</p>
          <ContactLinkContainer/>
          </DetailContainer>
        </ContactContainer>
      </FooterWrapper>
    )
  }
}

export default Footer