// Built-in
import React from 'react'
// External
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from 'hooks/reduxHooks'
// Layout
import AppLayout from 'layout/Layout'

const PublicRoute: React.FC = () => {
  const token = useAppSelector((state) => state.auth.auth.accessToken)

  return token ? (
    <Navigate to="/" />
  ) : (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default PublicRoute
