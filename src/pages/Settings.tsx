import React from 'react'
import { Typography, Paper, Box, Button, Grid, TextField, Switch, FormControlLabel, Divider, Card, CardContent, Stack, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import WarningIcon from '@mui/icons-material/Warning'

export default function Settings() {
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
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Settings</Typography>

      {/* School Settings */}
      <Paper sx={{ p: 3, mb: 2 }}>
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
      <Paper sx={{ p: 3, mb: 2 }}>
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
      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Device Settings</Typography>
        <Box>
          <TextField label="Device Heartbeat Interval (seconds)" type="number" fullWidth size="small" value={settings.deviceHeartbeatInterval} onChange={(e) => handleChange('deviceHeartbeatInterval', parseInt(e.target.value))} />
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>How often devices check in</Typography>
        </Box>
      </Paper>

      {/* Danger Zone */}
      <Paper sx={{ p: 3, mb: 2, backgroundColor: '#fff3e0', borderLeft: '4px solid #ff9800' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <WarningIcon sx={{ color: '#ff9800', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Danger Zone</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>These actions cannot be undone</Typography>
            <Stack spacing={1}>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start' }}>Clear All Attendance Logs</Button>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start' }}>Reset All Devices</Button>
              <Button variant="outlined" color="error" fullWidth sx={{ justifyContent: 'flex-start' }}>Delete School Data</Button>
            </Stack>
          </Box>
        </Box>
      </Paper>

      {/* Save Button */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSave}>Save Settings</Button>
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
