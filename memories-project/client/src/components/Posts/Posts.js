import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import nothing from '../../images/nothing.jpg';

import Post from './Post/Post.js';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();  

    if(!posts.length && !isLoading) return (        
            <div>
                <Link to="/" >
                    <div class="container" style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <img src={nothing} alt="Nothing to see here..." />
                        <Typography variant="h3">Oops! No posts to display</Typography>
                        </div>
                    </div>
                </Link>
            </div>        
    );

    return (
        isLoading ? <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress color='primary' size="7em" /></div> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;