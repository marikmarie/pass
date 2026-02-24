import React from 'react'
import { Typography, Grid, Paper, Box, Card, CardContent, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Tooltip, Button } from '@mui/material'
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
  { category: 'On Campus', value: 160, fill: '#10B981' },
  { category: 'Away', value: 8, fill: '#8B5CF6' },
]

const KPICard = ({ title, value, subtitle, icon: Icon, color }: any) => (
  <Card sx={{ 
    h: '100%', 
    background: color,
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -50,
      right: -50,
      width: 150,
      height: 150,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%'
    }
  }}>
    <CardContent sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500, mb: 1 }}>{title}</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>{value}</Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>{subtitle}</Typography>
        </Box>
        <Icon sx={{ fontSize: 45, opacity: 0.3 }} />
      </Box>
    </CardContent>
  </Card>
)

export default function Dashboard() {
  return (
    <Box sx={{ pb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>Welcome back, Administrator</Typography>
          <Typography color="textSecondary" variant="body2">Here's your PASS system overview</Typography>
        </Box>
        <Tooltip title="Refresh data">
          <IconButton color="primary" size="medium" sx={{ backgroundColor: '#FFF0F7', color: '#FF1B6D' }}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard 
            title="Students On Campus" 
            value="160" 
            subtitle="of 168 enrolled" 
            icon={PeopleIcon} 
            color="linear-gradient(135deg, #FF1B6D 0%, #FF6B9D 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard 
            title="Devices Online" 
            value="3/4" 
            subtitle="System operational" 
            icon={DevicesIcon} 
            color="linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard 
            title="Attendance Rate" 
            value="95.2%" 
            subtitle="Today's verification" 
            icon={CheckCircleIcon} 
            color="linear-gradient(135deg, #10B981 0%, #34D399 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard 
            title="System Uptime" 
            value="99.8%" 
            subtitle="Last 30 days" 
            icon={SpeedIcon} 
            color="linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, backgroundColor: '#fff' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Attendance Timeline</Typography>
              <Button size="small" variant="text" color="primary">View All</Button>
            </Box>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <ChartTooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="#FF1B6D" strokeWidth={3} dot={{ r: 5, fill: '#FF1B6D' }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, backgroundColor: '#fff' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Campus Occupancy</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={studentPresence} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                  {studentPresence.map((entry: any, idx: number) => <Cell key={idx} fill={entry.fill} />)}
                </Pie>
                <ChartTooltip />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2, display: 'flex', gap: 3, justifyContent: 'center' }}>
              {studentPresence.map((cat: any) => (
                <Box key={cat.category} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, backgroundColor: cat.fill, borderRadius: '3px' }} />
                  <Typography variant="caption" color="textSecondary">{cat.category}: {cat.value}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity & Device Status */}
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, backgroundColor: '#fff' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recent Activity</Typography>
              <Button size="small" variant="text" color="primary">View All</Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1F2937' }}>Student</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1F2937' }}>Action</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1F2937' }}>Device</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1F2937' }}>Time</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1F2937' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivity.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td': { borderBottom: 0 }, '&:hover': { backgroundColor: '#F9FAFB' }, borderBottom: '1px solid #E5E7EB' }}>
                      <TableCell sx={{ color: '#1F2937', fontWeight: 500 }}>{row.student}</TableCell>
                      <TableCell><Chip label={row.action} size="small" variant="outlined" sx={{ borderColor: '#E5E7EB' }} /></TableCell>
                      <TableCell sx={{ color: '#6B7280' }}>{row.device}</TableCell>
                      <TableCell sx={{ color: '#6B7280' }}>{row.time}</TableCell>
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
          <Paper sx={{ p: 3, backgroundColor: '#fff' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Device Status</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {deviceStatus.map((device) => (
                <Box 
                  key={device.name} 
                  sx={{ 
                    p: 2, 
                    backgroundColor: '#F9FAFB', 
                    borderRadius: '8px', 
                    border: '1px solid #E5E7EB',
                    '&:hover': { backgroundColor: '#F3F4F6' }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1F2937' }}>{device.name}</Typography>
                    <Chip 
                      label={device.status === 'online' ? 'Online' : 'Offline'} 
                      size="small" 
                      sx={{
                        backgroundColor: device.status === 'online' ? '#ECFDF5' : '#FEF2F2',
                        color: device.status === 'online' ? '#10B981' : '#EF4444',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="textSecondary" display="block">Heartbeat: {device.lastHeartbeat}</Typography>
                  <Typography variant="caption" color="textSecondary" display="block">Verifications: {device.verifications}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
