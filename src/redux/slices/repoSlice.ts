import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { RepoType } from '../../types';

export interface repoState {
  list: RepoType[];
}

const initialState: repoState = {
  list: [],
};

export const fetchUserRepos = createAsyncThunk('repos/fetchUserRepos', async (username: string) => {
  const api = new Api();
  const response: RepoType[] = await api.loadRepos(username);
  return response;
});

export const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const selectReposFromState = (state: RootState): RepoType[] => state.repos.list;

export const selectRepos = createSelector(selectReposFromState, (repos: RepoType[]) => repos);

export default repoSlice.reducer;
