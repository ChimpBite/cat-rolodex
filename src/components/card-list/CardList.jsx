import React from 'react';
import { Card } from '../card/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  paper: {
    padding: 10,
    margin: 5,
  },
}));

export const CardList = props => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        {props.cats.map(cat => (
          <Grid item xs={12} sm={4}>
            <Box>
              <Paper className={classes.paper}>
                <Card key={cat.id} cat={cat} />
              </Paper>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};
