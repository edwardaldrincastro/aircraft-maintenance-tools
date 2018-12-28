import axios from 'axios';

export let API_V1 = axios.create({
  baseURL: "https://aircraftmaintenance-350da.firebaseio.com/tools",
//   transformResponse: [(data) => data.data],
  responseType: 'json'
});

// export const API_POST = async (url, params) => {
//   try {
//     return await API_V1.post(url, params)
//   } catch ({response}) {
//     if(response.status === 422) return response;
//     console.log("response", response)
//   }
// }