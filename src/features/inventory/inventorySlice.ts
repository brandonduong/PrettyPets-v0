import {createSlice} from '@reduxjs/toolkit'

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    starDust: {
      uglyStarDust: 0,
      poorStarDust: 0,
      fineStarDust: 0,
      cuteStarDust: 0,
      prettyStarDust: 0
    },
    rainbowDye: 0,
  },
  reducers: {
    setInventory: (state, action) => {
      state.starDust = action.payload.starDust
      state.rainbowDye = action.payload.rainbowDye
    }
  },
})

// Action creators are generated for each case reducer function
export const {setInventory} = inventorySlice.actions

export default inventorySlice.reducer
