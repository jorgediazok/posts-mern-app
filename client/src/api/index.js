import axios from 'axios';
require('dotenv').config();

const API = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

//const url = process.env.REACT_APP_APIURL + '/posts';
//const url2 = process.env.REACT_APP_APIURL + '/user';

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => axios.put(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
