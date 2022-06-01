import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  organization: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  list: {},
};
export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrganization: (state, action) => {
      state.list = action.payload;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.organization = [];
      state.list = {};
    },
  },
});
export const { setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
export const fetchOrganizationDataPublic = () => async (dispatch) => {
  dispatch(setOrganization(
    {
      name: 'Rick and Morty',
      image: '/logo192.png',
      urlLinkedin: 'https://www.linkedin.com/in/alperbicer',
    },
  ));
};
