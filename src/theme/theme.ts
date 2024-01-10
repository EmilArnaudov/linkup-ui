import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f0234',
      light: '#540d76',
    },
    secondary: {
      main: '#540d76',
    },
    background: {
      default: '#0a051b',
      // default: '#0B3C5D',
    },
    grey: {
      '50': '#646464',
    },
  },
  typography: {
    // body1: {
    //   color: 'white',
    // },
    // body2: {
    //   color: 'white',
    // },
    // h3: {
    //   color: 'white',
    // },
    // h4: {
    //   color: 'white',
    // },
    // h5: {
    //   color: 'white',
    // },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'DragonHunter',
      color: 'white',
    },
    h2: {
      fontFamily: 'DragonHunter',
      color: 'white',
    },
  },
});

export default theme;
