import { createTheme } from '@mui/material/styles'

const colorMap = {
  pink: '#FF1B6D',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  green: '#10B981',
  orange: '#F97316',
  red: '#EF4444'
}

export const createAppTheme = (darkMode: boolean = false, colorScheme: keyof typeof colorMap = 'pink') => {
  const primaryColor = colorMap[colorScheme]
  const isDark = darkMode

  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: primaryColor },
      secondary: { main: isDark ? '#9CA3AF' : '#2D2D2D' },
      background: {
        default: isDark ? '#111827' : '#F5F7FA',
        paper: isDark ? '#1F2937' : '#FFFFFF'
      },
      text: {
        primary: isDark ? '#F3F4F6' : '#1F2937',
        secondary: isDark ? '#9CA3AF' : '#6B7280'
      },
      divider: isDark ? '#374151' : '#E5E7EB',
    },
    typography: {
      fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
      h4: { fontWeight: 700, letterSpacing: '-0.5px' },
      h6: { fontWeight: 600 },
      body2: { color: isDark ? '#9CA3AF' : '#6B7280' }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: 'none',
            '&:hover': { boxShadow: `0 4px 12px ${primaryColor}40` }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
            boxShadow: isDark ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
            borderRight: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
            color: isDark ? '#F3F4F6' : '#1F2937',
            boxShadow: `0 1px 3px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)'}`
          }
        }
      }
    }
  })
}

export default createAppTheme()


