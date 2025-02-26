import React, { Suspense } from 'react'
import { ConfigProvider } from 'antd'
import AppRoutes from 'routes/routes'
import Loader from 'utils/Loader'

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#220EB1',
          fontFamily: 'Geologica, sans-serif',
        },
        components: {
          Select: {
            optionSelectedBg: '#fff',
          },
        },
      }}
    >
      <Loader />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
