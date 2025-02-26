// builtin
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from 'pages/DashBoard'
import PublicRoute from './PublicRoutes'
import InstantSupport from 'pages/InstantSupport'

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/instant-support" element={<InstantSupport />} />
      </Route>

      {/* private routes */}

      {/* page not found */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
