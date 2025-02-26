import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from 'store/Store'

const initialState = {
  accessToken: '',
  permission: [],
  role: { id: '', name: '' },
  profileDetails: {
    base_url: '',
    email: '',
    external_path: '',
    first_name: '',
    id: '',
    image: '',
    internal_path: '',
    last_name: '',
    is_admin: false,
    timezone: '',
    date_format: 'DD/MM/YY',
    language: '0:00',
  },
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthLogin: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.permission = action.payload.permission
      state.role = action.payload.role
      state.profileDetails = action.payload.profileDetails
    },
    setLogOut: (state) => {
      state.accessToken = ''
      state.permission = []
      state.role = { id: '', name: '' }
    },
    setProfileData: (state, action) => {
      state.profileDetails = action.payload
    },
  },
})

export const { setAuthLogin, setLogOut, setProfileData } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
