import axios from 'axios';
import authenticationInterceptor from '../interceptors/authentication.interceptor';
import clientErrorInterceptor from '../interceptors/client-error.interceptor';
const rickandMortyApiGwClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 240000,
  timeoutErrorMessage: 'İstek zaman aşımına uğradı, lütfen tekrar deneyiniz.',
});
authenticationInterceptor(rickandMortyApiGwClient);
clientErrorInterceptor(rickandMortyApiGwClient);
export default rickandMortyApiGwClient;
