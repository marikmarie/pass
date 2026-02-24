import React from 'react'
import { Typography, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

const dummySchools = [
  { id: 1, name: 'Prestige High School', location: 'Kampala', devices: 4, students: 168, principal: 'Dr. Jane Kikwi', phone: '+256700111111', status: 'active' },
  { id: 2, name: 'Central Primary School', location: 'Entebbe', devices: 2, students: 89, principal: 'Mr. John Smith', phone: '+256700222222', status: 'active' },
  { id: 3, name: 'Sacred Heart Academy', location: 'Jinja', devices: 3, students: 245, principal: 'Sr. Maria Kamugisha', phone: '+256700333333', status: 'active' },
  { id: 4, name: 'Kigezi High School', location: 'Kabale', devices: 2, students: 134, principal: 'Mr. Peter Kabera', phone: '+256700444444', status: 'inactive' },
]

export default function Schools() {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [editingSchool, setEditingSchool] = React.useState<any>(null)

  const handleOpenDialog = (school?: any) => {
    setEditingSchool(school || {})
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingSchool(null)
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Schools</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>Add School</Button>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Schools</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>4</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Active Schools</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4caf50' }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Students</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>636</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Devices</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>11</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Schools Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>School Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Principal</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Students</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Devices</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummySchools.map((school) => (
              <TableRow key={school.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                <TableCell sx={{ fontWeight: '500' }}>{school.name}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: '1rem', color: '#666' }} />
                    {school.location}
                  </Box>
                </TableCell>
                <TableCell>{school.principal}</TableCell>
                <TableCell><Chip label={school.students} variant="outlined" /></TableCell>
                <TableCell><Chip label={school.devices} color="primary" variant="outlined" /></TableCell>
                <TableCell>
                  <Chip label={school.status} color={school.status === 'active' ? 'success' : 'default'} size="small" />
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleOpenDialog(school)}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingSchool?.id ? 'Edit School' : 'Add New School'}</DialogTitle>
        <DialogContent sx={{ pt: 2, display: 'grid', gap: 2 }}>
          <TextField label="School Name" fullWidth size="small" defaultValue={editingSchool?.name} />
          <TextField label="Location" fullWidth size="small" defaultValue={editingSchool?.location} />
          <TextField label="Principal Name" fullWidth size="small" defaultValue={editingSchool?.principal} />
          <TextField label="Phone Number" fullWidth size="small" defaultValue={editingSchool?.phone} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseDialog}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
