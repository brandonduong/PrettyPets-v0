import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit'
import prettyPointsReducer from "../features/prettypoints/prettyPointsSlice";
import jobsReducer from "../features/jobs/jobsSlice"
import prettyPetsReducer from "../features/prettypets/prettyPetsSlice"

const combinedReducer = combineReducers({
  prettyPoints: prettyPointsReducer,
  jobs: jobsReducer,
  prettyPets: prettyPetsReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'prettyPoints/logout') {
    state = {};
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
