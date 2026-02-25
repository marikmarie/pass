import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { createAppTheme } from './theme'
import './index.css'

function AppWithTheme() {
  const { darkMode, colorScheme } = useTheme()
  const theme = createAppTheme(darkMode, colorScheme)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/pass">
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  </React.StrictMode>
)
