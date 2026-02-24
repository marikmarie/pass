import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

const drawerWidth = 260

export default function MainLayout() {
  const [open, setOpen] = React.useState(true)
  const location = useLocation()

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#F5F7FA' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#FFFFFF',
            borderRight: '1px solid #E5E7EB',
            pt: 0
          }
        }}
        open={true}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            backgroundColor: '#F5F7FA',
            p: 3
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
