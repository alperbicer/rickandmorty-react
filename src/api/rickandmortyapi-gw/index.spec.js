import rickandMortyApiGwClient from './index';
import MockAdapter from 'axios-mock-adapter';
jest.mock('config/index.js', () => ({
  RICK_AND_MORTY_API_GW_BASE_URL: 'https://rickandmortyapi.com/api',
  API_TIMEOUT_MS: 240000,
}));
describe('merchant-api-gw/index.js', () => {
  it('should has correct base url and correct timeout ms', async () => {
    const mockAdapter = new MockAdapter(rickandMortyApiGwClient);
    mockAdapter.onGet('/test').reply(200, {});
    const testResponse = await rickandMortyApiGwClient.get('/test');
    expect(testResponse.config.baseURL).toBe('https://rickandmortyapi.com/api');
    expect(testResponse.config.timeout).toBe(240000);
  });
});
