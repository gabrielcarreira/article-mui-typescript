import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: ['Montserrat'].join(',')
  },
  palette: {
    primary: {
      main: 'hsl(217, 19%, 35%)',
      dark: 'hsl(214, 17%, 51%)'
    },
    secondary: {
      main: 'hsl(212, 23%, 69%)',
      dark: 'hsl(210, 46%, 95%)'
    },
    background: {
      default: '#edf2f8',
      paper: 'white'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
