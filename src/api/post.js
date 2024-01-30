import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjY0NzdhNWJlYzBjZDMxODg3YzI0Mjc4YTk2OTc0YSIsInN1YiI6IjY1NTY1YjMzNjdiNjEzNDVjY2FmNjRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm6bCbKSjQCJ3o_hxKCB1vDtvimoS_GCFv44Y1Q5P3Y',
  },
});

export const getPostById = id => {
  return instance.get(`/3/movie/${id}?language=en-US`);
};



export const getAllPosts = () => {
  return instance.get('/3/trending/all/day?language=en-US');
};

export const searchPosts = (query) => {
  return instance.get(`/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
};
// export const searchPost = search => {
//     return axios.get("")
// }
export const getCommetsByPostId = (id) => {
  return instance.get(`/3/search/movie?${id}&credits&language=en-US`);
};