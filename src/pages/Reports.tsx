import React from 'react'
import { Typography, Paper, Box, Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

// Dummy report data
const dailyAttendance = [
  { date: 'Feb 17', present: 158, absent: 10, late: 2 },
  { date: 'Feb 18', present: 161, absent: 7, late: 3 },
  { date: 'Feb 19', present: 159, absent: 9, late: 1 },
  { date: 'Feb 20', present: 164, absent: 4, late: 5 },
  { date: 'Feb 21', present: 160, absent: 8, late: 2 },
  { date: 'Feb 22', present: 162, absent: 6, late: 4 },
  { date: 'Feb 23', present: 160, absent: 8, late: 3 },
]

const attendanceByClass = [
  { class: 'Form 1A', attendance: 94 },
  { class: 'Form 1B', attendance: 92 },
  { class: 'Form 2A', attendance: 89 },
  { class: 'Form 2B', attendance: 91 },
  { class: 'Form 3A', attendance: 96 },
  { class: 'Form 3B', attendance: 88 },
  { class: 'Form 4A', attendance: 98 },
  { class: 'Form 4B', attendance: 93 },
]

const detailedReport = [
  { date: 'Feb 23', totalVerifications: 324, successRate: '97.5%', failedAttempts: 8, avgProcessTime: '1.2s' },
  { date: 'Feb 22', totalVerifications: 332, successRate: '96.8%', failedAttempts: 11, avgProcessTime: '1.3s' },
  { date: 'Feb 21', totalVerifications: 328, successRate: '98.1%', failedAttempts: 6, avgProcessTime: '1.1s' },
]

export default function Reports() {
  const [dateFrom, setDateFrom] = React.useState('2026-02-17')
  const [dateTo, setDateTo] = React.useState('2026-02-23')
  const [school, setSchool] = React.useState('all')

  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Attendance Reports</Typography>
        <Button variant="outlined" startIcon={<FileDownloadIcon />}>Export CSV</Button>
      </Box>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="From Date" type="date" fullWidth size="small" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="To Date" type="date" fullWidth size="small" value={dateTo} onChange={(e) => setDateTo(e.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>School</InputLabel>
              <Select value={school} onChange={(e) => setSchool(e.target.value)} label="School">
                <MenuItem value="all">All Schools</MenuItem>
                <MenuItem value="prestige">Prestige High School</MenuItem>
                <MenuItem value="central">Central Primary School</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button variant="contained" fullWidth>Generate Report</Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Charts */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Daily Attendance Trend</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyAttendance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px' }} />
                <Legend />
                <Line type="monotone" dataKey="present" stroke="#4caf50" name="Present" />
                <Line type="monotone" dataKey="absent" stroke="#f44336" name="Absent" />
                <Line type="monotone" dataKey="late" stroke="#ff9800" name="Late" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Attendance by Class</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceByClass} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="class" angle={-45} textAnchor="end" height={80} stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px' }} />
                <Bar dataKey="attendance" fill="#2196f3" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Detailed Report Table */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Daily Report</Typography>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Verifications</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Success Rate</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Failed Attempts</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Avg Process Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detailedReport.map((report, idx) => (
                <TableRow key={idx} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.totalVerifications}</TableCell>
                  <TableCell>
                    <Chip label={report.successRate} color={parseFloat(report.successRate) >= 97 ? 'success' : 'warning'} size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip label={report.failedAttempts} variant="outlined" size="small" />
                  </TableCell>
                  <TableCell>{report.avgProcessTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
