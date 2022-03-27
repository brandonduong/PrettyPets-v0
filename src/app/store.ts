import { configureStore } from '@reduxjs/toolkit'
import prettyPointsReducer from "../features/prettypoints/prettyPointsSlice";
import jobsReducer from "../features/jobs/jobsSlice"
import prettyPetsReducer from "../features/prettypets/prettyPetsSlice"

const store = configureStore({
  reducer: {
    prettyPoints: prettyPointsReducer,
    jobs: jobsReducer,
    prettyPets: prettyPetsReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
