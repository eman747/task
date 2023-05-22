import axios from 'axios';

export const loginAPI = (username, password) => {
  //   return new Promise(async (resolve, reject) => {
  axios
    .post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    })
    .then(function (response) {
      return response.data.token;
    })
    .catch(function (error) {
      console.log(error);
    });
  //});
};
