import React from 'react'
import { Spin } from 'antd'
import { useAppSelector } from 'hooks/reduxHooks'

const Loader = () => {
  const loader = useAppSelector((state) => state.common.globalLoader)
  return (
    <>
      {loader && (
        <>
          <div className="loader-wrapper">
            <span className="ant-zoom">
              <Spin fullscreen size="large" />
            </span>
          </div>
        </>
      )}
    </>
  )
}

export default Loader
