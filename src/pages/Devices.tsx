import React from 'react'
import { Typography, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const dummyDevices = [
  { id: 1, name: 'Main Gate', deviceId: 'DEV-001', school: 'Prestige High', location: 'Main Entrance', status: 'online', lastHeartbeat: '2 sec ago', verifications: 234, enrolled: 156 },
  { id: 2, name: 'Dininning', deviceId: 'DEV-002', school: 'Prestige High', location: 'Back Gate', status: 'online', lastHeartbeat: '1 sec ago', verifications: 198, enrolled: 156 },
  { id: 3, name: 'P1 Class', deviceId: 'DEV-003', school: 'Prestige High', location: 'Side Gate', status: 'offline', lastHeartbeat: '5 min ago', verifications: 0, enrolled: 0 },
  { id: 4, name: 'Main hall', deviceId: 'DEV-004', school: 'Central Primary', location: 'Admin Block', status: 'online', lastHeartbeat: '3 sec ago', verifications: 45, enrolled: 89 },
]

export default function Devices() {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [editingDevice, setEditingDevice] = React.useState<any>(null)

  const handleOpenDialog = (device?: any) => {
    setEditingDevice(device || {})
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingDevice(null)
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Devices</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>Add Device</Button>
      </Box>

      {/* Status Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Devices</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>4</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Online</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4caf50' }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Offline</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f44336' }}>1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Verifications</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>477</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Devices Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Device Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Device ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>School</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Verifications</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyDevices.map((device) => (
              <TableRow key={device.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                <TableCell sx={{ fontWeight: '500' }}>{device.name}</TableCell>
                <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{device.deviceId}</Typography></TableCell>
                <TableCell>{device.school}</TableCell>
                <TableCell>{device.location}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={device.status === 'online' ? `Online • ${device.lastHeartbeat}` : `Offline • ${device.lastHeartbeat}`}
                    color={device.status === 'online' ? 'success' : 'error'}
                  />
                </TableCell>
                <TableCell><Chip label={device.verifications} variant="outlined" /></TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleOpenDialog(device)}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingDevice?.id ? 'Edit Device' : 'Add New Device'}</DialogTitle>
        <DialogContent sx={{ pt: 2, display: 'grid', gap: 2 }}>
          <TextField label="Device Name" fullWidth size="small" defaultValue={editingDevice?.name} />
          <TextField label="Device ID" fullWidth size="small" defaultValue={editingDevice?.deviceId} />
          <TextField label="School" fullWidth size="small" defaultValue={editingDevice?.school} />
          <TextField label="Location" fullWidth size="small" defaultValue={editingDevice?.location} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseDialog}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
 