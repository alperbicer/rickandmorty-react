import config from 'config';
export default axiosInstance => {
  axiosInstance.interceptors.response.use(
    res => {
      if (res?.data?.success) {
        return res;
      }
      if (res?.data?.userMessage || res?.data?.success) {
        throw res?.data?.userMessage;
      }
      if (res?.data) {
        return res;
      }
    },
    err => {
      if (err?.response?.status === 401) {
        document.location.href = config.LOGIN_URL;
      }
      if (
        String(err?.response?.status).startsWith('4') &&
        !err?.response?.config?.disableClientErrorInterceptor
      ) {
        console.log('****');
      }
      throw err;
    },
  );
};
