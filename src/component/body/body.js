import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function Body(){
  const classes = useStyles();

  return (<div>
    <input type="text" placeholder="Tasks"/>
    <button class="button">Add task</button>
    <List>
      <ListItem button>
        <ListItemText primary="List Item #1"/>
      </ListItem>
      <ListItem button>
        <ListItemText primary="List Item #2"/>
      </ListItem>
    </List>
  </div>)
    
}