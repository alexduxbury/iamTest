import React from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@perlego/ui';

import { Wrapper } from './App.styles';
import { ButtonPrimary } from "@perlego/ui";

const App: React.FC = (): JSX.Element => {


  const GlobalStyle = createGlobalStyle`
    body: {
      margin: 0 0 0 0;
    }
  `;

  const [colour, setColour] = React.useState('red');
  const switchColour = () => {
    if (colour === 'red') setColour('blue');
    else setColour('red');
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper colourInput={colour}>
          <h1>TEST PERLEGO TYPESCRIPT APP</h1>
          <ButtonPrimary onClick={() => { switchColour() }}>CLICK ME</ButtonPrimary>
        </Wrapper>
      </ThemeProvider>
    </>
  )
};

export default App;