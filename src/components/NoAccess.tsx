import React, { useEffect } from 'react'
import { useAppDispatch } from 'hooks/reduxHooks'
import { t } from 'i18next'
import { changeHeaderTitle } from 'store/slice/CommonSlice'

const NoAccess = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      changeHeaderTitle({
        pageTitle: t('pageTitle.home'),
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, t])
  return <div className="w-full h-full flex justify-center items-center para-p1-regular">No Access</div>
}

export default NoAccess
