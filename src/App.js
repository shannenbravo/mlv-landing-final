import React from 'react';
import HeroBg from './assets/HeroBg.jpg';
import WhiteLogo from './assets/LogoWhite.png';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styling}>
        <img src={WhiteLogo} alt="Your Logo" style={logoStyle} />
        <Box sx={paragraphBox}>
          <Typography variant="body1" sx={paragraphStyling}>
            Experience luxury reimagined. Unveiling soon on our site—where opulence meets innovation, 
            defining the future of driving          
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.2rem',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const paragraphStyling = {
  color: 'white',
  fontFamily: 'Montserrat, sans-serif',
  // Responsive font size
  '@media (max-width:600px)': {
    fontSize: '1rem',
  },
  '@media (max-width:480px)': {
    fontSize: '0.9rem',
  },
};

const paragraphBox = {
  marginLeft: '25%',
  marginRight: '25%',
  marginTop: '5%',
  marginBottom: '5%',
};

const styling = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${HeroBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  '@media (max-width: 768px)': {
    height: '100vh',
  },
  '@media (max-width: 480px)': {
    height: '100vh',
  },
};

const logoStyle = {
  maxWidth: '75%',
  maxHeight: '75%',
};

export default App;
