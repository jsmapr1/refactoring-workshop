import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    minHeight: 500,
    border: 'gray solid 1px',
    '& h1': {
      margin: 0,
      padding: '1em 0',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
});

function Options(props) {
  const {
    classes, onClick, options,
  } = props;
  return (
    <div className={classes.root} data-testid="options">
      <List component="nav">
        <h1>Options</h1>
        {
      options.map(([sub, optionGroup]) => (
        <div key={sub}>
          <ListSubheader>{sub}</ListSubheader>
          {optionGroup.map(option => (
            <ListItem
              key={option.name}
              onClick={() => onClick(option)}
              button
              divider
            >
              <AddCircleIcon />
              <ListItemText primary={option.name} />
            </ListItem>
          ))}
        </div>
      ))
    }
      </List>
    </div>
  );
}

export default withStyles(styles)(Options);
