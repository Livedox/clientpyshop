import { boot } from 'quasar/wrappers';
import axios from 'axios';


const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/'
  : process.env.SERVER_URL

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: baseURL, withCredentials: true, headers: {
  'Access-Control-Allow-Origin': baseURL,
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}});

function createAxiosResponseInterceptor() {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }
      api.interceptors.response.eject(interceptor);

      return api
        .post('/auth/refresh')
        .then((response) => {
          localStorage.setItem('accessToken', response.data.accessToken);
          error.response.config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
          return axios(error.response.config);
        })
        .catch((error2) => {
          return Promise.reject(error2);
        })
        .finally(createAxiosResponseInterceptor);
    }
  );
}
createAxiosResponseInterceptor();

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };

