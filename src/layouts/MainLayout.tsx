import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import { useTheme } from '../context/ThemeContext'

const drawerWidth = 260

export default function MainLayout() {
  const { darkMode } = useTheme()

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'background.default' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
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
            backgroundColor: 'background.default',
            p: 3
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
