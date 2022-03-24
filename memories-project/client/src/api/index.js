import axios from 'axios';

const url = 'http://localhost:5000/posts'; //Used during dev.
// const url = 'https://memories-project-1997.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost); 
export const deletePost = (id) => axios.delete(`${url}/${id}`); 
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);