import React from 'react'
import { Typography, Grid, Paper, Box, Card, CardContent, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Tooltip } from '@mui/material'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SpeedIcon from '@mui/icons-material/Speed'
import PeopleIcon from '@mui/icons-material/People'
import DevicesIcon from '@mui/icons-material/Devices'
import RefreshIcon from '@mui/icons-material/Refresh'

// Dummy data
const attendanceData = [
  { time: '06:00', students: 0 },
  { time: '07:00', students: 45 },
  { time: '08:00', students: 128 },
  { time: '09:00', students: 156 },
  { time: '10:00', students: 160 },
  { time: '14:00', students: 155 },
  { time: '15:00', students: 120 },
  { time: '16:00', students: 45 },
]

const recentActivity = [
  { id: 1, student: 'John Doe', action: 'Entry', device: 'Gate A', time: '09:15', status: 'success' },
  { id: 2, student: 'Jane Smith', action: 'Entry', device: 'Gate A', time: '09:14', status: 'success' },
  { id: 3, student: 'Michael Brown', action: 'Exit', device: 'Gate B', time: '09:12', status: 'success' },
  { id: 4, student: 'Emily Wilson', action: 'Entry', device: 'Gate A', time: '09:10', status: 'success' },
  { id: 5, student: 'David Lee', action: 'Failed', device: 'Gate B', time: '09:08', status: 'error' },
]

const deviceStatus = [
  { name: 'Gate A', status: 'online', lastHeartbeat: '2 sec ago', verifications: 234 },
  { name: 'Gate B', status: 'online', lastHeartbeat: '1 sec ago', verifications: 198 },
  { name: 'Gate C', status: 'offline', lastHeartbeat: '5 min ago', verifications: 0 },
  { name: 'Admin Gate', status: 'online', lastHeartbeat: '3 sec ago', verifications: 45 },
]

const studentPresence = [
  { category: 'On Campus', value: 160, fill: '#4caf50' },
  { category: 'Away', value: 8, fill: '#2196f3' },
]

const KPICard = ({ title, value, subtitle, icon: Icon, color }: any) => (
  <Card sx={{ h: '100%', background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`, borderLeft: `4px solid ${color}` }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography color="textSecondary" gutterBottom sx={{ fontSize: '0.875rem' }}>{title}</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color }}>{value}</Typography>
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>{subtitle}</Typography>
        </Box>
        <Icon sx={{ fontSize: 40, color, opacity: 0.3 }} />
      </Box>
    </CardContent>
  </Card>
)

export default function Dashboard() {
  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Dashboard</Typography>
        <Tooltip title="Refresh data">
          <IconButton color="primary" size="small"><RefreshIcon /></IconButton>
        </Tooltip>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard title="Students On Campus" value="160" subtitle="of 168 enrolled" icon={PeopleIcon} color="#4caf50" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard title="Devices Online" value="3/4" subtitle="Last: Gate C" icon={DevicesIcon} color="#2196f3" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard title="Attendance Rate" value="95.2%" subtitle="Today's verification" icon={CheckCircleIcon} color="#ffc107" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard title="System Uptime" value="99.8%" subtitle="Last 30 days" icon={SpeedIcon} color="#9c27b0" />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Attendance Timeline</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="time" stroke="#999" />
                <YAxis stroke="#999" />
                <ChartTooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px' }} />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="#2196f3" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Campus Occupancy</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={studentPresence} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                  {studentPresence.map((entry: any, idx: number) => <Cell key={idx} fill={entry.fill} />)}
                </Pie>
                <ChartTooltip />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
              {studentPresence.map((cat: any) => (
                <Box key={cat.category} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, backgroundColor: cat.fill, borderRadius: '2px' }} />
                  <Typography variant="caption">{cat.category}: {cat.value}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity & Device Status */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Recent Activity</Typography>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Student</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Device</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivity.map((row) => (
                    <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                      <TableCell>{row.student}</TableCell>
                      <TableCell><Chip label={row.action} size="small" variant="outlined" /></TableCell>
                      <TableCell>{row.device}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>
                        <Chip
                          icon={row.status === 'success' ? <CheckCircleIcon /> : <ErrorIcon />}
                          label={row.status === 'success' ? 'Success' : 'Failed'}
                          color={row.status === 'success' ? 'success' : 'error'}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Device Status</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {deviceStatus.map((device) => (
                <Box key={device.name} sx={{ p: 1.5, backgroundColor: '#f8f9fa', borderRadius: 1, border: '1px solid #e0e0e0' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{device.name}</Typography>
                    <Chip label={device.status === 'online' ? 'Online' : 'Offline'} size="small" color={device.status === 'online' ? 'success' : 'error'} />
                  </Box>
                  <Typography variant="caption" color="textSecondary">Heartbeat: {device.lastHeartbeat}</Typography>
                  <Typography variant="caption" display="block" color="textSecondary">Verifications: {device.verifications}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
