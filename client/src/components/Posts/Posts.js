import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Post from './Post/Post';

function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Posts</h1>
      <Post />
      <Post />
    </React.Fragment>
  );
}

export default Posts;
