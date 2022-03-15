import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import repoSlice from './slices/repoSlice';
import gistSlice from './slices/gistSlice';
import orgSlice from './slices/orgSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    repos: repoSlice,
    gists: gistSlice,
    organizations: orgSlice,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
