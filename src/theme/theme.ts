
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f0234',
      light: '#540d76'
    },
    secondary: {
      main: '#540d76',
    },
    background: {
      default: '#0a051b'
    },

  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'DragonHunter'
    },
    h2: {
      fontFamily: 'DragonHunter'
    }
  },
});

export default theme;