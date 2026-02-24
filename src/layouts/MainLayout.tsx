import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from '../components/Sidebar'

const drawerWidth = 240

export default function MainLayout() {
  const [open, setOpen] = React.useState(true)
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen(!open)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PASS Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={open} sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' } }}>
        <Toolbar />
        <Sidebar />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="app-content">
          <Outlet />
        </div>
      </Box>
    </Box>
  )
}
