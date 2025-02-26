import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from 'store/Store'

const initialState = {
  name: '',
  description: '',
  sections: [],
}

export const addRoleSlice = createSlice({
  name: 'addRole',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setFormData } = addRoleSlice.actions

export const addRole = (state: RootState) => state.addRole

export default addRoleSlice.reducer
