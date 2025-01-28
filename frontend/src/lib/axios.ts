import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5500/api'
      : '/api',
});

// export const setAxiosAuth = (user: any) =>
//   axiosInstance.interceptors.request.use(
//     (config) => {
//       // Add the auth object to the request
//       config.auth = {
//         ...user,
//       };
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
