import axios from 'axios';
require('dotenv').config();

const url = process.env.REACT_APP_APIURL + '/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.put(`${url}/${id}/likePost`);
