import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { DownloadIcon, DrawerClose, DrawerOpen, Logo, LogOut, MyProfileIcon, SettingsIconColor, TaskManagerIcon, ThreeDotIcon } from 'assets/svgs'
import { siderMenu } from 'constants/SiderMenu'
import { useAppDispatch } from 'hooks/reduxHooks'
import { useWindowSize } from 'hooks/useWindowSize'
import { setLogOut } from 'store/slice/AuthSlice'
import { setGlobalLoader } from 'store/slice/CommonSlice'
import type { ISideBar } from 'types'

const Sidebar = ({ collapsed, setCollapsed }: ISideBar) => {
  const windowSize = useWindowSize()
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleLogout = () => {
    dispatch(setGlobalLoader(true))
    dispatch(setLogOut())
    navigate('/login')
    dispatch(setGlobalLoader(false))
  }

  useEffect(() => {
    setCollapsed(windowSize.width <= 950)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize])

  const content = (
    <div>
      <div className="cursor-pointer p-4 flex gap-2 items-center">
        <span>
          <DownloadIcon className="flex" />
        </span>
        <p className="para-p1 text-neutral-800">{t('button.downloads')}</p>
      </div>
      <div className="cursor-pointer p-4 flex gap-2 items-center">
        <span>
          <SettingsIconColor className="flex" />
        </span>
        <p className="para-p1 text-neutral-800">{t('button.preferences')}</p>
      </div>
      <div className="cursor-pointer p-4 flex gap-2 items-center">
        <span>
          <TaskManagerIcon className="flex" />
        </span>
        <p className="para-p1 text-neutral-800">{t('button.taskManager')}</p>
      </div>
      <div
        className="cursor-pointer p-4 flex gap-2 items-center"
        onClick={() => {
          navigate('/my-profile')
        }}
      >
        <span>
          <MyProfileIcon className="flex" />
        </span>
        <p className="para-p1 text-neutral-800">{t('button.myProfile')}</p>
      </div>
      <div className="cursor-pointer p-4 flex gap-2 items-center border-t-stroke" onClick={handleLogout}>
        <LogOut className="flex" />
        <p className="para-p1 text-error-500">{t('button.logout')}</p>
      </div>
    </div>
  )

  return (
    <div className="flex justify-between flex-col h-screen">
      <div className="sidebar-wrapper">
        <div className={`flex ${!collapsed ? 'justify-between' : 'justify-center'}`}>
          {!collapsed && (
            <div className="flex items-center gap-1 logo-section">
              <Logo />
            </div>
          )}

          {windowSize.width >= 950 ? (
            <div
              className="cursor-pointer logo-section drawer-icon"
              // onClick={() => {
              //   setCollapsed(!collapsed)
              // }}
            >
              {/* {collapsed ? <DrawerOpen className="cursor-pointer" /> : <DrawerClose className="cursor-pointer" />} */}
            </div>
          ) : (
            <Logo />
          )}
        </div>

        <div className="scroll-container-sider flex justify-between">
          {siderMenu.map((menu) => {
            return (
              <div key={menu.id} className="wrapper-menu-div ">
                
                {menu.subMenu.map((subMenu) => {
                  return (
                    <div
                      key={subMenu.id}
                      className={`${subMenu.path === location.pathname ? 'submenu-div-selected' : ''} flex gap-2 items-center submenu-div`}
                      onClick={() => {
                        navigate(subMenu.path)
                      }}
                    >
                      <div className="flex">{subMenu.path === location.pathname ? subMenu.selectedIcon : subMenu.icon}</div>
                      <p
                        style={{ color: subMenu.path === location.pathname ? '#4A57DA' : '#000000' }}
                        className={`submenu-name para-p2 font-normal ${collapsed ? 'none' : 'block'}`}
                      >
                        {subMenu.name} {subMenu?.switch}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
