import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from './reducers/counter.slice';

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
  preloadedState: {
    counter: { value: 1000 },
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
