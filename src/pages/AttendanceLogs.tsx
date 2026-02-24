import React from 'react'
import { Typography, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, Grid, Pagination, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const dummyLogs = [
  { id: 328, timestamp: '2026-02-23 09:15:32', student: 'John Doe', admissionNo: 'ADM001', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
  { id: 327, timestamp: '2026-02-23 09:14:15', student: 'Jane Smith', admissionNo: 'ADM002', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
  { id: 326, timestamp: '2026-02-23 09:12:47', student: 'Michael Brown', admissionNo: 'ADM003', device: 'Gate B', action: 'Exit', status: 'SUCCESS' },
  { id: 325, timestamp: '2026-02-23 09:10:22', student: 'Emily Wilson', admissionNo: 'ADM004', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
  { id: 324, timestamp: '2026-02-23 09:08:55', student: 'David Lee', admissionNo: 'ADM005', device: 'Gate B', action: 'Entry', status: 'FAILED' },
  { id: 323, timestamp: '2026-02-23 09:06:11', student: 'Sarah Johnson', admissionNo: 'ADM006', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
  { id: 322, timestamp: '2026-02-23 09:04:33', student: 'Tom Anderson', admissionNo: 'ADM007', device: 'Gate C', action: 'Entry', status: 'UNKNOWN' },
  { id: 321, timestamp: '2026-02-23 09:02:18', student: 'Lisa White', admissionNo: 'ADM008', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
  { id: 320, timestamp: '2026-02-23 08:59:45', student: 'Robert Green', admissionNo: 'ADM009', device: 'Gate B', action: 'Entry', status: 'SUCCESS' },
  { id: 319, timestamp: '2026-02-23 08:57:12', student: 'Maria Garcia', admissionNo: 'ADM010', device: 'Gate A', action: 'Entry', status: 'SUCCESS' },
]

export default function AttendanceLogs() {
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const itemsPerPage = 10

  const filteredLogs = dummyLogs.filter(log =>
    log.student.toLowerCase().includes(search.toLowerCase()) ||
    log.admissionNo.includes(search)
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUCCESS': return 'success'
      case 'FAILED': return 'error'
      case 'UNKNOWN': return 'warning'
      default: return 'default'
    }
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Attendance Logs</Typography>
        <Button variant="outlined" startIcon={<FileDownloadIcon />}>Export CSV</Button>
      </Box>

      {/* Filters */}
      <Paper sx={{ mb: 3, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField placeholder="Search by student name or admission no..." InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} /> }} value={search} onChange={(e) => setSearch(e.target.value)} fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="From Date" type="date" fullWidth size="small" defaultValue="2026-02-23" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="To Date" type="date" fullWidth size="small" defaultValue="2026-02-23" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
      </Paper>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Log ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Timestamp</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Student Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Admission No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Device</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLogs.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((log) => (
              <TableRow key={log.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{log.id}</Typography></TableCell>
                <TableCell><Typography variant="body2">{log.timestamp}</Typography></TableCell>
                <TableCell sx={{ fontWeight: '500' }}>{log.student}</TableCell>
                <TableCell>{log.admissionNo}</TableCell>
                <TableCell><Chip label={log.device} size="small" variant="outlined" /></TableCell>
                <TableCell><Chip label={log.action} size="small" color="primary" variant="outlined" /></TableCell>
                <TableCell>
                  <Chip label={log.status} size="small" color={getStatusColor(log.status) as any} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack sx={{ mt: 3, display: 'flex', alignItems: 'center' }} spacing={2}>
        <Pagination count={Math.ceil(filteredLogs.length / itemsPerPage)} page={page} onChange={(_, value) => setPage(value)} />
        <Typography variant="caption" color="textSecondary">Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, filteredLogs.length)} of {filteredLogs.length} records</Typography>
      </Stack>
    </Box>
  )
}
