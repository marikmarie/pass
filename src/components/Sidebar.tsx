import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import DevicesIcon from '@mui/icons-material/Devices'
import SchoolIcon from '@mui/icons-material/School'
import HistoryIcon from '@mui/icons-material/History'
import LogoutIcon from '@mui/icons-material/Logout'
import { useTheme as useCustomTheme } from '../context/ThemeContext'

const navItems = [
  { text: 'Dashboard', to: '/', icon: <DashboardIcon /> },
  { text: 'Attendance Logs', to: '/attendance', icon: <HistoryIcon /> },
  { text: 'Reports', to: '/reports', icon: <AssessmentIcon /> },
  { text: 'Students', to: '/students', icon: <PeopleIcon /> },
  { text: 'Schools', to: '/schools', icon: <SchoolIcon /> },
  { text: 'Devices', to: '/devices', icon: <DevicesIcon /> },
]

const secondaryItems = [
  { text: 'Settings', to: '/settings', icon: <SettingsIcon /> }
]

export default function Sidebar() {
  const location = useLocation()
  const { colorScheme } = useCustomTheme()

  const colorMap = {
    pink: '#FF1B6D',
    blue: '#3B82F6',
    purple: '#8B5CF6',
    green: '#10B981',
    orange: '#F97316',
    red: '#EF4444'
  }
  
  const primaryColor = colorMap[colorScheme as keyof typeof colorMap] || '#FF1B6D'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo Section */}
      <Box sx={{ p: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 40, height: 40, backgroundColor: primaryColor, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
            P
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1, color: 'text.primary' }}>
              PASS
            </Typography>
            <Typography variant="caption" color="textSecondary">
              System
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation */}
      <List sx={{ flex: 1, overflow: 'auto', pt: 1 }}>
        {navItems.map((item) => {
          const isSelected = location.pathname === item.to
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5, px: 1 }}>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                selected={isSelected}
                sx={{
                  borderRadius: '8px',
                  color: isSelected ? primaryColor : 'text.secondary',
                  backgroundColor: isSelected ? `${primaryColor}15` : 'transparent',
                  '&:hover': {
                    backgroundColor: isSelected ? `${primaryColor}15` : 'action.hover'
                  },
                  '& .MuiListItemIcon-root': {
                    minWidth: 40,
                    color: isSelected ? primaryColor : '#9CA3AF'
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '0.95rem',
                      fontWeight: isSelected ? 600 : 500,
                      letterSpacing: isSelected ? '-0.3px' : 0
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* Secondary Items */}
      <List sx={{ pb: 2 }}>
        {secondaryItems.map((item) => {
          const isSelected = location.pathname === item.to
          return (
            <ListItem key={item.text} disablePadding sx={{ px: 1 }}>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                selected={isSelected}
                sx={{
                  borderRadius: '8px',
                  color: isSelected ? primaryColor : 'text.secondary',
                  backgroundColor: isSelected ? `${primaryColor}15` : 'transparent',
                  '&:hover': {
                    backgroundColor: isSelected ? `${primaryColor}15` : 'action.hover'
                  },
                  '& .MuiListItemIcon-root': {
                    minWidth: 40,
                    color: isSelected ? primaryColor : '#9CA3AF'
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '0.95rem',
                      fontWeight: isSelected ? 600 : 500,
                      letterSpacing: isSelected ? '-0.3px' : 0
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      {/* Footer */}
      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', p: 2 }}>
        <ListItemButton
          sx={{
            borderRadius: '8px',
            color: 'text.secondary',
            '&:hover': { backgroundColor: 'action.hover' },
            '& .MuiListItemIcon-root': { minWidth: 40, color: '#9CA3AF' }
          }}
        >
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText
            primary="Sign Out"
            primaryTypographyProps={{
              sx: { fontSize: '0.95rem', fontWeight: 500 }
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  )
}
