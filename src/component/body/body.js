import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

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

    <form  noValidate autoComplete="off">
      <TextField id="filled-basic" label="Enter task" variant="filled" />
    </form>

    <Button variant="contained" color="primary">
        Add to List
    </Button>

    <List>
      <ListItem button>
        <ListItemText primary="Sample List Item"/>
        <ListItemSecondaryAction>
            <IconButton edge = "start" aria-label="delete">
                <EditIcon />
            </IconButton>
        </ListItemSecondaryAction>
        <ListItemSecondaryAction>
            <IconButton edge = "end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  </div>)
    
}