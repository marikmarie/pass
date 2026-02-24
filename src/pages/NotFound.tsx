import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const nav = useNavigate()
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3">404</Typography>
      <Typography variant="h6" gutterBottom>Page not found</Typography>
      <Button variant="contained" onClick={() => nav('/')}>Go home</Button>
    </Box>
  )
}
