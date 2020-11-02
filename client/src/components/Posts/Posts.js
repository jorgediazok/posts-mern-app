import React from 'react';
import useStyles from './styles';
import Post from './Post/Post';

function Posts() {
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
