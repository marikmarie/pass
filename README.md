# PASS Dashboard

A professional React + TypeScript dashboard for the PASS (Parent Alert School System) - a biometric-based student monitoring and notification platform.

## Features

- **Real-Time Dashboard**: Live attendance monitoring, device status, KPIs, and activity logs
- **Student Management**: Complete student registry with enrollment tracking and status monitoring
- **School Management**: Multi-school support with device and student allocation
- **Device Management**: Monitor biometric device status, heartbeat, and verification counts
- **Attendance Logs**: Detailed transaction logs with search, filter, and export capabilities
- **Reports & Analytics**: Daily attendance trends, class-wise analytics, and detailed reports
- **Professional UI**: Material Design components with responsive layout
- **Charts & Visualizations**: Recharts for attendance trends, occupancy pie charts, and performance metrics

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast bundler
- **Material UI (MUI)** - Component library
- **Recharts** - Data visualization
- **React Router v6** - Navigation

## Project Structure

```
pass-dashboard/
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx         # Main overview with KPIs and charts
│   │   ├── AttendanceLogs.tsx    # Detailed transaction logs
│   │   ├── Reports.tsx           # Analytics and reporting
│   │   ├── Students.tsx          # Student management
│   │   ├── Schools.tsx           # School management
│   │   ├── Devices.tsx           # Device management
│   │   ├── Settings.tsx          # Admin settings
│   │   ├── Login.tsx             # Authentication
│   │   └── NotFound.tsx          # 404 page
│   ├── layouts/
│   │   └── MainLayout.tsx        # Main layout with sidebar & header
│   ├── components/
│   │   └── Sidebar.tsx           # Navigation sidebar
│   ├── App.tsx                   # Routes configuration
│   ├── main.tsx                  # Entry point
│   ├── theme.ts                  # MUI theme
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Install dependencies**:
```powershell
cd "d:\Cissy technologies\PASS\pass-dashboard"
npm install
```

2. **Start development server**:
```powershell
npm run dev
```

3. **Open in browser**: http://localhost:5173

### Build for Production

```powershell
npm run build
```

Output will be in the `dist` folder.

### Preview Production Build

```powershell
npm run preview
```

## Dashboard Pages

### 📊 Dashboard
- **KPI Cards**: Students on campus, devices online, attendance rate, system uptime
- **Attendance Timeline**: Line chart showing student entries/exits throughout the day
- **Campus Occupancy**: Pie chart showing student presence distribution
- **Recent Activity**: Real-time log of student entries/exits with status indicators
- **Device Status**: Monitors all biometric devices with heartbeat and verification counts

### 📋 Attendance Logs
- Searchable transaction log of all student verifications
- Filter by date range and student
- Status indicators (Success/Failed/Unknown)
- Pagination support
- Export to CSV functionality

### 📈 Reports & Analytics
- **Daily Attendance Trend**: Multi-line chart showing present/absent/late trends
- **Attendance by Class**: Bar chart comparing attendance rates across classes
- **Detailed Daily Report**: Success rates, failed attempts, average processing time
- Date range filtering
- School-wise filtering
- Export capability

### 👥 Students Management
- Complete student registry with admission numbers
- Search functionality
- Enrollment status tracking
- Last captured activity
- Add/Edit/Delete student functionality
- Parent contact information

### 🏫 Schools Management
- Multi-school support
- School information and location
- Principal details
- Student count per school
- Device allocation per school
- Active/Inactive status

### 🔧 Devices Management
- Device registry with unique IDs
- Real-time online/offline status
- Heartbeat monitoring
- Verification counts
- Device location and school association
- Add/Edit/Delete device capabilities

### ⚙️ Settings
- School configuration
- Notification preferences (SMS, USSD)
- Device heartbeat intervals
- Notification delay settings
- Danger zone operations

## Dummy Data

The dashboard comes pre-populated with realistic dummy data:
- 168 students across 4 schools
- 4 biometric devices with live status simulation
- 328+ attendance logs
- Daily attendance trends
- Multiple schools with different configurations

## Customization

### Update Theme
Edit `src/theme.ts` to customize colors:

```tsx
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' }
  }
})
```

### Add New Pages
1. Create page file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation item in `src/components/Sidebar.tsx`

### Integrate with Backend
Replace dummy data with API calls:

```tsx
import axios from 'axios'

const [data, setData] = React.useState([])

React.useEffect(() => {
  axios.get('/api/attendance-logs')
    .then(res => setData(res.data))
}, [])
```

## Next Steps

1. **Backend Integration**: Connect to PASS API endpoints
2. **Real-Time Updates**: Implement WebSocket for live data
3. **Authentication**: Add login/auth system
4. **Export Features**: Implement PDF/CSV export
5. **Mobile Responsiveness**: Enhance tablet/mobile views
6. **Notifications**: Integrate notification toasts
7. **Dark Mode**: Add theme toggle

## Performance Tips

- Uses Vite for fast HMR (Hot Module Reload)
- Code splitting with React Router
- Lazy loading for heavy components
- Optimized chart rendering with Recharts

## Troubleshooting

### Dependencies not installing?
```powershell
npm install --legacy-peer-deps
```

### Port 5173 already in use?
```powershell
npm run dev -- --port 3000
```

### TypeScript errors?
```powershell
npm run build  # Full type checking
```

## License

Proprietary - Cissy Technologies

## Support

For questions or issues:
- Email: cissytech@gmail.com
- Phone: +256 709 100 974
- Website: www.cissytech.com

