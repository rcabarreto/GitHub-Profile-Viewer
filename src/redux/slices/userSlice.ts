import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { UserType } from '../../types';

export interface userState {
  list: UserType[];
}

const initialState: userState = {
  list: [],
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (username: string) => {
  const api = new Api();
  const response: UserType = await api.loadUser(username);
  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.list = [...state.list.filter((userItem) => userItem.id !== action.payload.id), action.payload];
    });
  },
});

const getUsername = (_: RootState, username: string) => username;

export const selectUsersFromState = (state: RootState): UserType[] => state.user.list;

export const selectUserByUsername = createSelector(
  selectUsersFromState,
  getUsername,
  (users, username) => users.filter((user) => user.login === username)[0],
);

export const selectUsers = createSelector(selectUsersFromState, (user: UserType[]) => user);

export default userSlice.reducer;
