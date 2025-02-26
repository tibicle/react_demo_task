import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { changeHeaderTitle } from 'store/slice/CommonSlice'

const DashBoard = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const name = useAppSelector((state) => state?.auth?.auth?.profileDetails?.first_name)

  useEffect(() => {
    dispatch(
      changeHeaderTitle({
        pageTitle: `Dashboard`,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, t, name])

  return <div>{t('common.shoorah')}</div>
}

export default DashBoard
