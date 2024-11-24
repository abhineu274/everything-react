import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IPost } from "../models/PostModels";
import { fetchPosts } from "../services/PostServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { fetchPostsStart } from "../store/slices/postSlice";

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  postContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(3),
  },
  postBox: {
    flex: "1 1 calc(50% - 16px)",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
    height: 400,
    maxHeight: 400,
    maxWidth: "40vw",
  },
  cardMedia: {
    height: 250,
  },
}));

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Posts
      </Typography>
      <Box className={classes.postContainer}>
        {posts?.map((post) => (
          <Box key={post.id} className={classes.postBox}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image={post.imageUrl}
                title={post.title} // Use title for accessibility
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
