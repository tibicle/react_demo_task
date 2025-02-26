import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input, Layout } from 'antd'
import { CommandIcon, HeaderBack, NotificationIcon, SearchIcon, SupportRequest } from 'assets/svgs'
import { pathsWithSpecialStyles } from 'constants/Constant'
import { useAppSelector } from 'hooks/reduxHooks'
import { selectCommon } from 'store/slice/CommonSlice'
import type { ILayoutProps } from 'types'

import NotificationDrawer from './NotificationDrawer'
import Sidebar from './Sidebar'
import { userProfile } from 'assets/imgs'

const { Header, Sider, Content } = Layout

const AppLayout = ({ children }: ILayoutProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState<boolean>(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const common = useAppSelector(selectCommon)
  const location = useLocation()

  const handleBack = () => {
    navigate(-1)
  }

  const handleNotificationDrawerOpen = () => {
    setIsNotificationDrawerOpen(true)
  }

  const isSpecialPath = (path: string) => {
    return pathsWithSpecialStyles.some((basePath) => path === basePath || path.startsWith(`${basePath}/`))
  }
  const isAddTestPath = isSpecialPath(location.pathname)

  return (
    <>
      <Layout className="wrapper-layout">
        <Sider trigger={null} collapsible collapsed={collapsed} className={`${collapsed ? 'collapsed-sidebar' : 'sider-layout'}  bg-white`}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>
        <Layout>
          <Header className="header-wrapper flex justify-between items-center">
            <div className="header-content-div">
              {common?.isBack && (
                <div onClick={handleBack} className="div-handle-back">
                  <HeaderBack />
                </div>
              )}
              <p className="header-heading-text page-title">{common?.pageTitle}</p>
              <p className="header-heading-text">Expert support, right when it's needed most. Give your team the backing they deserve, with instant access to professionals who can help today.</p>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="flex gap-6 items-center">
                <div className="header-icon">
                  <NotificationIcon onClick={handleNotificationDrawerOpen} />
                </div>
                <div className="profile-section">
                  <div className="profile-img">
                    <img src={userProfile} alt="profile" />
                  </div>
                  <div>
                    <div className="user-name">Reuben Hale</div>
                    <div className="user-role">Sub Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content className={isAddTestPath ? 'special-class' : 'wrapper-content'}>{children}</Content>
        </Layout>
      </Layout>

      {isNotificationDrawerOpen && <NotificationDrawer isNotificationDrawerOpen={isNotificationDrawerOpen} setIsNotificationDrawerOpen={setIsNotificationDrawerOpen} />}
    </>
  )
}

export default AppLayout
