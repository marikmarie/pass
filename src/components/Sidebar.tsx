import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import DevicesIcon from '@mui/icons-material/Devices'
import SchoolIcon from '@mui/icons-material/School'
import HistoryIcon from '@mui/icons-material/History'

const navItems = [
  { text: 'Dashboard', to: '/', icon: <DashboardIcon /> },
  { text: 'Attendance Logs', to: '/attendance', icon: <HistoryIcon /> },
  { text: 'Reports', to: '/reports', icon: <AssessmentIcon /> },
  { text: 'Students', to: '/students', icon: <PeopleIcon /> },
  { text: 'Schools', to: '/schools', icon: <SchoolIcon /> },
  { text: 'Devices', to: '/devices', icon: <DevicesIcon /> },
  { text: 'Settings', to: '/settings', icon: <SettingsIcon /> }
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.to} selected={location.pathname === item.to}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )
}
