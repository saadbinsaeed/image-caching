import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import Divider from '@material-ui/core/Divider';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});

const DrawerMenuItems = (props: Object) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Inbox" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary="Drafts" />
				</ListItem>
			</List>
		</div>
	);
};

DrawerMenuItems.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenuItems);
