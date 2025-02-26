// built in
import React from 'react'
// External
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from 'hooks/reduxHooks'
import AppLayout from 'layout/Layout'

const PrivateRoute = () => {
  const token = useAppSelector((state) => state.auth.auth.accessToken)
  return token ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
