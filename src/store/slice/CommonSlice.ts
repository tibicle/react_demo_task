import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from 'store/Store'

const initialState = {
  globalLoader: false,
  pageTitle: 'Instant Support,',
  isBack: '',
  isClientInfo: false,
}

export const commonSlice = createSlice({
  name: 'commonData',
  initialState,
  reducers: {
    changeHeaderTitle: (state, action) => {
      state.pageTitle = action.payload.pageTitle
      state.isBack = action.payload.isBack
      state.isClientInfo = action.payload.isClientInfo
    },
    setGlobalLoader: (state, action) => {
      state.globalLoader = action.payload
    },
  },
})

export const { changeHeaderTitle, setGlobalLoader } = commonSlice.actions

export const selectCommon = (state: RootState) => state.common

export default commonSlice.reducer
