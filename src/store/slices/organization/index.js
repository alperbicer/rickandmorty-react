import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ENDPOINT_PUBLIC } from 'services/settings';
import { updateService } from 'services/apiService';
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
  extraReducers: (builder) => {
    builder
      .addCase(updateOrganization.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateOrganization.fulfilled, (state, action) => {
        const updatedOrganization = state.organization.map(e => e.id === action.payload.id ? action.payload.data : e);
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.organization = updatedOrganization;
        state.list = action.payload;
      })
      .addCase(updateOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
export const fetchOrganizationDataPublic = () => async (dispatch) => {
  dispatch(setOrganization(
    {
      name: 'Alper Biçer',
      phone: '5059470918',
      image: 'logo192.png',
      address: 'İzmir',
      welcomeText: 'Welcome',
      urlLinkedin: 'https://www.linkedin.com/in/alperbicer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ));
};
export const updateOrganization = createAsyncThunk('update/organization', async (data, thunkAPI) => {
  try {
    const { id, ...organization } = data;
    const response = await updateService(ENDPOINT_PUBLIC, id, organization);
    return response.data;
  } catch (error) {
    const message = (error.response.data?.msg || error.response.data) ||
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
