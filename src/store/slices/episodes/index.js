import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import rickAndMortyService from 'services';
const initialState = {
  episodes: [],
  info: {},
  episode: {},
  characters: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};
export const episodeSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.episodes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEpisodes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllEpisodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.episodes = action.payload.results;
        state.info = action.payload.info;
      })
      .addCase(fetchAllEpisodes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.episodes = [];
      })
      .addCase(fetchEpisode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEpisode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.episode = action.payload;
      })
      .addCase(fetchEpisode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.episode = {};
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.characters = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.characters = [];
      });
  },
});
export const { reset } = episodeSlice.actions;
export default episodeSlice.reducer;
export const fetchAllEpisodes = createAsyncThunk('episodes', async (thunkAPI) => {
  try {
    const data = await rickAndMortyService.getEpisodes();
    return data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const fetchEpisode = createAsyncThunk('episode', async (id, thunkAPI) => {
  try {
    const data = await rickAndMortyService.getEpisode(id);
    return data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const fetchCharacter = createAsyncThunk('characters', async ({ characters, filters = null, episode = null }, thunkAPI) => {
  try {
    let query = '';
    let data = null;
    if (filters) {
      query = new URLSearchParams(filters).toString();
      data = await rickAndMortyService.getCharacter('', query);
      data = data.results.filter((result) => result.episode.some((data) => {
        const urlList = data.split('/');
        return episode.toString() === urlList[urlList.length - 1];
      }));
    } else {
      const idList = characters.map((url) => {
        const urlSplitList = url.split('/');
        return urlSplitList[urlSplitList.length - 1];
      });
      data = await rickAndMortyService.getCharacter(idList.join(','));
    }
    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
