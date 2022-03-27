import {createSlice} from '@reduxjs/toolkit'
import {PrettyPet} from "../../API";

const MAX_SELECTED = 6

export const prettyPetsSlice = createSlice({
  name: 'prettyPets',
  initialState: {
    value: [] as Array<PrettyPet>,
    fetched: false,
    selected: [] as Array<string>
  },
  reducers: {
    setPrettyPets: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
      state.fetched = true
    },
    selectPrettyPet: (state, action) => {
      const newId = action.payload
      if (!state.selected.includes(newId) && state.selected.length < MAX_SELECTED) {
        state.selected = [...state.selected, newId]
      } else if (state.selected.includes(newId)) {
        const temp = state.selected
        temp.splice(state.selected.indexOf(newId), 1)
        state.selected = [...temp]
      }
    },
    setSelectedPrettyPets: (state, action) => {
      state.selected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPrettyPets, selectPrettyPet, setSelectedPrettyPets } = prettyPetsSlice.actions

export default prettyPetsSlice.reducer
