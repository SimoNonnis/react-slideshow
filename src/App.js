import React, { Component } from 'react';
import styled from 'styled-components';
import { Slideshow } from './components';

const AppContainer = styled.div`
  height: 100vh;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin: 2em 0;
  font-size: 25px;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Title>react slideshow</Title>
        <Slideshow>
          <img
            src="https://source.unsplash.com/LVnJlyfa7Zk/800x400"
            alt=""
            width="800"
            height="400"
          />
          <img
            src="https://source.unsplash.com/e7NaoF3cVNw/800x400"
            alt=""
            width="800"
            height="400"
          />
          <img
            src="https://source.unsplash.com/o0h7czAis4U/800x400"
            alt=""
            width="800"
            height="400"
          />
          <img
            src="https://source.unsplash.com/UD49wA8vtCQ/800x400"
            alt=""
            width="800"
            height="400"
          />
          <img
            src="https://source.unsplash.com/uCTlqRpsv5c/800x400"
            alt=""
            width="800"
            height="400"
          />
        </Slideshow>
      </AppContainer>
    );
  }
}

export default App;
