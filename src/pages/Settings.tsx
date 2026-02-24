import React from 'react'
import { Typography, Paper, Box, Button, Grid, TextField, Switch, FormControlLabel, Divider, Card, CardContent, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import WarningIcon from '@mui/icons-material/Warning'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BrushIcon from '@mui/icons-material/Brush'
import { useTheme } from '../context/ThemeContext'

const colorOptions = [
  { name: 'pink', hex: '#FF1B6D', label: 'Pink' },
  { name: 'blue', hex: '#3B82F6', label: 'Blue' },
  { name: 'purple', hex: '#8B5CF6', label: 'Purple' },
  { name: 'green', hex: '#10B981', label: 'Green' },
  { name: 'orange', hex: '#F97316', label: 'Orange' },
  { name: 'red', hex: '#EF4444', label: 'Red' },
]

export default function Settings() {
  const { darkMode, toggleDarkMode, colorScheme, setColorScheme } = useTheme()
  
  const [settings, setSettings] = React.useState({
    schoolName: 'Prestige High School',
    adminEmail: 'admin@prestigehigh.edu',
    smsNotifications: true,
    enableUSSD: true,
    notificationDelay: 30,
    deviceHeartbeatInterval: 60,
  })

  const [openConfirm, setOpenConfirm] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  const handleChange = (field: string, value: any) => {
    setSettings({ ...settings, [field]: value })
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Settings & Preferences</Typography>

      {/* Theme Configurator */}
      <Paper sx={{ p: 3, mb: 3, backgroundColor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <BrushIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Theme Configurator</Typography>
        </Box>
        
        {/* Light/Dark Toggle */}
        <Box sx={{ mb: 3.5 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Theme Mode</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>Choose between light and dark mode</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant={!darkMode ? 'contained' : 'outlined'}
              onClick={() => toggleDarkMode()}
              startIcon={<WbSunnyIcon />}
              sx={{
                px: 3,
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '8px',
              }}
            >
              Light
            </Button>
            <Button
              variant={darkMode ? 'contained' : 'outlined'}
              onClick={() => toggleDarkMode()}
              startIcon={<DarkModeIcon />}
              sx={{
                px: 3,
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '8px',
              }}
            >
              Dark
            </Button>
          </Box>
          {darkMode && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#1F2937', borderRadius: '8px', border: '1px solid #374151' }}>
              <Typography variant="caption" sx={{ color: '#E5E7EB' }}>
                ✓ Dark mode enabled - Better for low-light environments
              </Typography>
            </Box>
          )}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Color Scheme */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Accent Color</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2.5 }}>Customize your dashboard's primary accent color</Typography>
          
          <Grid container spacing={1.5}>
            {colorOptions.map((color) => (
              <Grid item xs={6} sm={4} md={2} key={color.name}>
                <Box
                  onClick={() => setColorScheme(color.name as any)}
                  sx={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: color.hex,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: colorScheme === color.name ? '3px solid' : '2px solid transparent',
                    borderColor: colorScheme === color.name ? '#000' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    boxShadow: colorScheme === color.name ? `0 0 0 3px ${color.hex}40` : '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 4px 12px ${color.hex}40`
                    }
                  }}
                >
                  {colorScheme === color.name && (
                    <CheckCircleIcon sx={{ color: '#fff', fontSize: '2rem' }} />
                  )}
                </Box>
                <Typography variant="caption" align="center" display="block" sx={{ mt: 1 }}>
                  {color.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>

      {/* School Settings */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>School Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="School Name" fullWidth value={settings.schoolName} onChange={(e) => handleChange('schoolName', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Admin Email" fullWidth value={settings.adminEmail} onChange={(e) => handleChange('adminEmail', e.target.value)} />
          </Grid>
        </Grid>
      </Paper>

      {/* Notification Settings */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Notification Settings</Typography>
        <Stack spacing={2}>
          <FormControlLabel control={<Switch checked={settings.smsNotifications} onChange={(e) => handleChange('smsNotifications', e.target.checked)} />} label="Enable SMS Notifications" />
          <FormControlLabel control={<Switch checked={settings.enableUSSD} onChange={(e) => handleChange('enableUSSD', e.target.checked)} />} label="Enable USSD Service" />
          <Box>
            <TextField label="Notification Delay (seconds)" type="number" fullWidth size="small" value={settings.notificationDelay} onChange={(e) => handleChange('notificationDelay', parseInt(e.target.value))} />
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>Delay before sending notification after verification</Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Device Settings */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Device Settings</Typography>
        <Box>
          <TextField label="Device Heartbeat Interval (seconds)" type="number" fullWidth size="small" value={settings.deviceHeartbeatInterval} onChange={(e) => handleChange('deviceHeartbeatInterval', parseInt(e.target.value))} />
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>How often devices check in</Typography>
        </Box>
      </Paper>

      {/* About Section */}
      <Paper sx={{ p: 3, mb: 3, backgroundColor: 'background.paper' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>About PASS System</Typography>
        <Box sx={{ display: 'grid', gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>Version</Typography>
            <Typography variant="body2" color="textSecondary">1.0.0</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>Last Updated</Typography>
            <Typography variant="body2" color="textSecondary">February 24, 2026</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>Support</Typography>
            <Typography variant="body2" color="textSecondary">
              Email: <a href="mailto:cissytech@gmail.com" style={{ color: 'inherit' }}>cissytech@gmail.com</a>
              <br />
              Phone: +256 709 100 974
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Danger Zone */}
      <Paper sx={{ p: 3, mb: 3, backgroundColor: '#FEF2F2', borderLeft: '4px solid #EF4444' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <WarningIcon sx={{ color: '#EF4444', mt: 0.5, flexShrink: 0 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#DC2626' }}>Danger Zone</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>These actions cannot be undone</Typography>
            <Stack spacing={1}>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start', textTransform: 'none' }}>
                Clear All Attendance Logs
              </Button>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start', textTransform: 'none' }}>
                Reset All Devices
              </Button>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start', textTransform: 'none' }}>
                Delete School Data
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>

      {/* Save Button */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSave} sx={{ px: 4 }}>
          Save Settings
        </Button>
        {saved && <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>✓ Settings saved</Typography>}
      </Box>

      {/* Confirm Dialog */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>Are you sure? This action cannot be undone.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
          <Button color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
