import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { GistType } from '../../types';

export interface gistState {
  list: GistType[];
}

const initialState: gistState = {
  list: [],
};

export const fetchUserGists = createAsyncThunk('gists/fetchUserGists', async (username: string) => {
  const api = new Api();
  const response: any = await api.loadGists(username);
  return response;
});

export const companySlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserGists.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const selectGistsFromState = (state: RootState) => state.gists.list;

export const selectGists = createSelector(selectGistsFromState, (gists: GistType[]) => gists);

export default companySlice.reducer;
