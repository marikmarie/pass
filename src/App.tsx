import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Devices from './pages/Devices'
import Schools from './pages/Schools'
import AttendanceLogs from './pages/AttendanceLogs'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<AttendanceLogs />} />
        <Route path="reports" element={<Reports />} />
        <Route path="students" element={<Users />} />
        <Route path="devices" element={<Devices />} />
        <Route path="schools" element={<Schools />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
