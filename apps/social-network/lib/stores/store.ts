import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '@features/auth/authenticationSlice';
import storeUser from './middleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeUser),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// https://www.youtube.com/watch?v=bpbLq6NxIm8

// import { configureStore } from '@reduxjs/toolkit';
// import storeUser from './middleware';
// import { createWrapper } from 'next-redux-wrapper';
// import authReducer from '../../features/auth/authenticationSlice';

// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       auth: authReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(storeUser),
//   });

// export const store = createWrapper(makeStore);
