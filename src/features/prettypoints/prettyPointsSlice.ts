import { createSlice } from '@reduxjs/toolkit'

export const prettyPointsSlice = createSlice({
  name: 'prettyPoints',
  initialState: {
    value: -1,
    userId: '',
  },
  reducers: {
    incrementByAmount: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value === -1) {
        state.value += 1
      }
      state.value += action.payload
    },
    logout: (state) => {
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount, logout, setUserId } = prettyPointsSlice.actions

export default prettyPointsSlice.reducer
