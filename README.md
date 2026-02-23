# PASS Dashboard

A modern, professional dashboard for Performance Assessment & Support System built with Vite + React + TypeScript + Material UI.

## Features

✨ **Modern UI/UX**
- Clean, professional design with Material UI components
- Responsive layout that works on all devices
- Beautiful gradient theme with smooth animations
- Dark/Light mode support option

📊 **Comprehensive Pages**
- **Dashboard**: KPI cards, trend charts, activity logs
- **Reports**: Detailed analytics with filtering and charts
- **Users**: User management with roles and status
- **Settings**: Customizable preferences and configurations
- **Authentication**: Professional login page

🎨 **Visual Components**
- Interactive charts using Recharts
- Data tables with sorting and filtering
- Progress indicators and status chips
- KPI cards with trends
- Activity logs

## Project Structure

```
pass-dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   │   └── Sidebar.tsx
│   ├── layouts/          # Layout wrappers
│   │   └── MainLayout.tsx
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Reports.tsx
│   │   ├── Users.tsx
│   │   ├── Settings.tsx
│   │   ├── Login.tsx
│   │   └── NotFound.tsx
│   ├── data/            # Mock data
│   │   └── mockData.ts
│   ├── types/           # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── theme.ts
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Tech Stack

- **React 18.2** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Material UI (MUI)** - Component library
- **Recharts** - Charting library
- **React Router** - Navigation
- **Emotion** - CSS-in-JS styling
- **Axios** - HTTP client (ready to integrate)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project:
```powershell
cd "d:\Cissy technologies\PASS\pass-dashboard"
```

2. Install dependencies:
```powershell
npm install
```

### Development

Start the development server:
```powershell
npm run dev
```

The app will open at http://localhost:5173

### Demo Credentials

- **Email**: admin@example.com
- **Password**: demo123

### Build for Production

```powershell
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```powershell
npm run preview
```

## Pages Overview

### 🏠 Dashboard
- KPI metrics with trend indicators
- Line charts showing assessment trends
- Pass/Fail rate pie chart
- Active assessments table with progress
- Recent activity log

### 📈 Reports
- Category statistics cards
- Completion rate bar charts
- Status distribution visualization
- Searchable and filterable reports table
- Download functionality

### 👥 Users
- User statistics overview
- Search and filter by role
- User management table with actions
- Avatar initials
- Add new user dialog
- Role-based coloring

### ⚙️ Settings
- **General**: App name, organization, timezone, language
- **Appearance**: Theme colors, dark mode, compact view
- **Security**: 2FA, session timeout, password policies
- **Notifications**: Email preferences, alert types

### 🔐 Login
- Modern gradient background
- Email and password fields
- Remember me checkbox
- Forgot password & Sign up links
- Demo credentials display

## Customization

### Colors & Theme

Edit `src/theme.ts` to customize:
- Primary & secondary colors
- Typography
- Component styles

Current color scheme:
- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Purple)

### Mock Data

Edit `src/data/mockData.ts` to:
- Add more sample data
- Modify existing data structure
- Update metrics and statistics

### Add New Pages

1. Create page file in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation item in `src/components/Sidebar.tsx`

## API Integration

Ready to connect to backend services. Replace mock data in `src/data/mockData.ts` with API calls:

```typescript
import axios from 'axios'

export const fetchDashboard = async () => {
  const response = await axios.get('/api/dashboard')
  return response.data
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication system
- [ ] Export reports to PDF/Excel
- [ ] Dark mode implementation
- [ ] Multi-language support
- [ ] Advanced user management
- [ ] Dashboard customization
- [ ] Email notifications

## Performance

- ⚡ Fast page loads with Vite
- 📦 Optimized bundle size
- 🎯 Code splitting for faster initial load
- 📱 Mobile-optimized

## License

© 2026 Cissy Technologies. All rights reserved.

## Support

For issues and questions, please contact the development team.
