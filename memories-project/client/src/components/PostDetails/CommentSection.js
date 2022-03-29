import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState(''); 
  const [comments, setComments] = useState(post?.comments);
  const dispatch = useDispatch();
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    
    const newComments = await dispatch(commentPost(finalComment, post._id)); 
    
    setComments(newComments);  
    setComment('');

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  }; 

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Comments</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name ? (
        <div style={{ width: '70%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
        ) : (
          <Typography gutterBottom variant="h6">Log in to write a Comment</Typography>
        )}
      </div>
    </div>
  );
};

export default CommentSection;