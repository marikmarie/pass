import React from 'react'
import { Typography, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Avatar, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

// Dummy student data
const dummyStudents = [
  { id: 1, name: 'John Doe', admissionNo: 'ADM001', class: 'Form 4A', parentPhone: '+256700123456', enrollmentStatus: 'enrolled', lastSeen: '09:15 - Entry' },
  { id: 2, name: 'Jane Smith', admissionNo: 'ADM002', class: 'Form 3B', parentPhone: '+256700123457', enrollmentStatus: 'enrolled', lastSeen: '09:14 - Entry' },
  { id: 3, name: 'Michael Brown', admissionNo: 'ADM003', class: 'Form 4A', parentPhone: '+256700123458', enrollmentStatus: 'enrolled', lastSeen: '08:45 - Exit' },
  { id: 4, name: 'Emily Wilson', admissionNo: 'ADM004', class: 'Form 2C', parentPhone: '+256700123459', enrollmentStatus: 'pending', lastSeen: 'Not enrolled' },
  { id: 5, name: 'David Lee', admissionNo: 'ADM005', class: 'Form 3B', parentPhone: '+256700123460', enrollmentStatus: 'enrolled', lastSeen: '07:50 - Entry' },
  { id: 6, name: 'Sarah Johnson', admissionNo: 'ADM006', class: 'Form 4B', parentPhone: '+256700123461', enrollmentStatus: 'enrolled', lastSeen: '09:10 - Entry' },
  { id: 7, name: 'Tom Anderson', admissionNo: 'ADM007', class: 'Form 2A', parentPhone: '+256700123462', enrollmentStatus: 'inactive', lastSeen: '3 days ago - Exit' },
]

export default function Users() {
  const [search, setSearch] = React.useState('')
  const [openDialog, setOpenDialog] = React.useState(false)
  const [editingStudent, setEditingStudent] = React.useState<any>(null)

  const filteredStudents = dummyStudents.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.admissionNo.includes(search))

  const handleOpenDialog = (student?: any) => {
    setEditingStudent(student || {})
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingStudent(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enrolled': return 'success'
      case 'pending': return 'warning'
      case 'inactive': return 'error'
      default: return 'default'
    }
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Students</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>Add Student</Button>
      </Box>

      {/* Search */}
      <Paper sx={{ mb: 3, p: 2 }}>
        <TextField placeholder="Search by name or admission number..." InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} /> }} value={search} onChange={(e) => setSearch(e.target.value)} fullWidth size="small" />
      </Paper>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Admission No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Class</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Parent Phone</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Enrollment</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Last Seen</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, fontSize: '0.9rem' }}>{student.name.charAt(0)}</Avatar>
                    {student.name}
                  </Box>
                </TableCell>
                <TableCell>{student.admissionNo}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{student.parentPhone}</Typography></TableCell>
                <TableCell>
                  <Chip label={student.enrollmentStatus} size="small" color={getStatusColor(student.enrollmentStatus) as any} variant="outlined" />
                </TableCell>
                <TableCell><Typography variant="body2" color="textSecondary">{student.lastSeen}</Typography></TableCell>
                <TableCell align="center">
                  <IconButton size="small" color="primary" onClick={() => handleOpenDialog(student)}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingStudent?.id ? 'Edit Student' : 'Add New Student'}</DialogTitle>
        <DialogContent sx={{ pt: 2, display: 'grid', gap: 2 }}>
          <TextField label="Full Name" fullWidth size="small" defaultValue={editingStudent?.name} />
          <TextField label="Admission Number" fullWidth size="small" defaultValue={editingStudent?.admissionNo} />
          <TextField label="Class" fullWidth size="small" defaultValue={editingStudent?.class} />
          <TextField label="Parent Phone" fullWidth size="small" defaultValue={editingStudent?.parentPhone} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleCloseDialog}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
