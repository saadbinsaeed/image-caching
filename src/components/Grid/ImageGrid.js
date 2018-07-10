import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from 'components/Image/Image';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
});

const ImageGridList = props => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{(props.images || []).map(item => (
					<GridListTile key={item.url} cols={1}>
						<Image
							src={item.url}
							height={item.h}
							width={item.w}
							alt="No Alter Text"
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

ImageGridList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
