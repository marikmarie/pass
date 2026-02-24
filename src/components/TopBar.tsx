import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const pageNames: { [key: string]: string } = {
  '/': 'Dashboard',
  '/attendance': 'Attendance Logs',
  '/reports': 'Reports',
  '/students': 'Students',
  '/schools': 'Schools',
  '/devices': 'Devices',
  '/settings': 'Settings',
}

export default function TopBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = React.useState('')

  const getCurrentPageName = () => {
    return pageNames[location.pathname] || 'Dashboard'
  }

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        px: 3,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3
      }}
    >
      {/* Left - Breadcrumbs */}
      <Box>
        <Breadcrumbs sx={{ mb: 1 }}>
          <Link underline="hover" color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer', fontWeight: 500 }}>
            Pages
          </Link>
          <Typography color="textSecondary" sx={{ fontWeight: 500 }}>
            {getCurrentPageName()}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Right - Search & Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Search */}
        <TextField
          placeholder="Search here..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: 200,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#F9FAFB',
              '&:hover': { backgroundColor: '#F3F4F6' }
            }
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '1.2rem' }} />
          }}
        />

        {/* Icons */}
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <SettingsIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
