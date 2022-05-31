export default axiosInstance => {
  axiosInstance.interceptors.request.use(async (config) => {
    config.headers.Authorization = 'Bearer token';
    return config;
  });
};
