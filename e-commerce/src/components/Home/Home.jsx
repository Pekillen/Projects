import React from 'react';
import { CssBaseline, Button, AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import useStyles from './styles';

const Home = ({ comeIn }) => {  
    const classes = useStyles();
  return (        
    <div className={classes.root}>
        <CssBaseline /> 
        <div className={classes.center}>
            <div className={classes.verCenter}>
                <Typography variant="h2" text-align="center">
                    Welcome to your <br />
                    hikingshop.net
                </Typography>
                <Button className={classes.button} onClick={() => comeIn()}>
                    <Typography variant="h3" className={classes.text}>
                           Come in!                      
                    </Typography>         
                </Button>
            </div>
        </div>                  
    </div>                         
  )
}

export default Home;