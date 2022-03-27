import {createSlice} from '@reduxjs/toolkit'
import {Job} from "../../API";

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    value: [] as Array<Job>,
    fetched: false
  },
  reducers: {
    setJobs: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
      state.fetched = true
    },
    removeJob: (state, action) => {
      state.value.splice(state.value.findIndex(x => x.id === action.payload.id), 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setJobs, removeJob } = jobsSlice.actions

export default jobsSlice.reducer
