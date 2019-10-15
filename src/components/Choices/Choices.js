import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = theme => ({
  item: {
    '&:hover $delete': {
      display: 'inline-block',
    },
  },
  delete: {
    display: 'none',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    minHeight: 500,
    border: 'gray solid 1px',
  },
});

function Choices(props) {
  const { classes, onRemove, toppings } = props;
  return (
    <div className={classes.root} data-testid="order">
      <List component="nav">
        <h1>Your Custom Order</h1>
        {toppings.map(topping => (
          <ListItem
            divider
            button
            className={classes.item}
            onClick={() => onRemove(topping)}
            key={topping}
          >
            <ListItemText primary={topping} />
            <DeleteForeverIcon className={classes.delete} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default withStyles(styles)(Choices);
