import { rickandMortyApiGwClient } from 'api';
export default {
  async getEpisodes() {
    const { data } = await rickandMortyApiGwClient.get(
      '/episode',
    );
    return data;
  },
  async getEpisode(id) {
    const { data } = await rickandMortyApiGwClient.get(
      '/episode/' + id,
    );
    return data;
  },
  async getCharacter(characterList, filter) {
    const { data } = await rickandMortyApiGwClient.get(
      '/character/' + characterList + '?' + filter,
    );
    return data;
  },
};
