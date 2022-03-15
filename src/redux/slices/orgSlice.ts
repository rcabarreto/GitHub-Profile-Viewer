import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { OrganizarionType } from '../../types';

export interface organizationState {
  list: OrganizarionType[];
}

const initialState: organizationState = {
  list: [],
};

export const fetchUserOrganizations = createAsyncThunk(
  'organization/fetchUserOrganizations',
  async (username: string) => {
    const api = new Api();
    const response: OrganizarionType[] = await api.loadOrgs(username);
    return response;
  },
);

export const companySlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrganizations.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const selectOrganizationsFromState = (state: RootState) => state.organizations.list;

export const selectOrganizations = createSelector(
  selectOrganizationsFromState,
  (organizations: OrganizarionType[]) => organizations,
);

export default companySlice.reducer;
