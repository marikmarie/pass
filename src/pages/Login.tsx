import React from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Login() {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>Sign in</Typography>
      <Box component="form" sx={{ display: 'grid', gap: 2 }}>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained">Sign In</Button>
      </Box>
    </Container>
  )
}
