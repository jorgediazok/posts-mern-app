// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import Post from './Post/Post';

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  const filteredPosts = useMemo(() => {
    if (!posts || !posts.length) return null;

    const filtered = posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log(posts);
    return filtered;
  }, [posts]);

  console.log(posts);

  console.log(filteredPosts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}>
      {filteredPosts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
