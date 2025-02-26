import React from 'react'
import { useTranslation } from 'react-i18next'
import { Drawer } from 'antd'
import { CalenderCheckIcon, DoubleCheckIcon, SettingsIconColor } from 'assets/svgs'
import type { INotificationDrawer } from 'types'

const NotificationDrawer = ({ isNotificationDrawerOpen, setIsNotificationDrawerOpen }: INotificationDrawer) => {
  const { t } = useTranslation()
  const onClose = () => {
    setIsNotificationDrawerOpen(false)
  }

  return (
    <Drawer placement="right" closable={false} onClose={onClose} open={isNotificationDrawerOpen} className="notification-drawer" rootClassName="notification-drawer-root">
      <div className="head-notifications border-b-stroke flex">
        <div className="flex w-full items-center justify-between ">
          <p className="text-neutral-800 desktop-head-h5 font-bold ">{t('label.login.notification')}</p>
          <div className="flex gap-4">
            <div className="icon-div-notification cursor-pointer">
              <DoubleCheckIcon className="flex" />
            </div>
            <div className="icon-div-notification cursor-pointer">
              <SettingsIconColor className="flex" />
            </div>
          </div>
        </div>
      </div>

      <div className="notification-list border-b-stroke">
        <div className="flex gap-3">
          <div className="icon-notification">
            <CalenderCheckIcon className="w-full h-full flex justify-center items-center" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-800 para-p2">Shift Scheduled!</p>
            <p className="text-neutral-700 font-small para-p3">Your shift on 06/12/2023 at Rocky Mtn. Care of Heber is cancelled.</p>
            <p className="text-neutral-600 para-p4 font-small">2 hours ago</p>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default NotificationDrawer
