import axios from 'axios';
require('dotenv').config();

const url = process.env.REACT_APP_APIURL + '/posts';
const url2 = process.env.REACT_APP_APIURL + '/user';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.put(`${url}/${id}/likePost`);

export const signIn = (formData) => axios.post(`${url2}/signin`, formData);
export const signUp = (formData) => axios.post(`${url2}/signup`, formData);
