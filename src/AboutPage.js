import React, { Component } from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`

`
class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.aboutRef = React.createRef();
    this.scrollToAboutRef = this.scrollToAboutRef.bind(this); 
  }

  scrollToAboutRef() {
    debugger
    window.scrollTo(0, this.aboutRef.current.offsetTop)
  }
  render() {
    return(
      <AboutDiv>
        About
      </AboutDiv>
    )
  }
}

export default AboutPage