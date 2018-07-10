import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		maxWidth: 395,
	},
};

const SimpleMediaCard = props => {
	const { classes, item } = props;
	return (
		<div>
			<Card className={classes.card}>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{item.headline}
					</Typography>
					<Typography component="p">{item.synopsis}</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						Rating: {item.rating || 'No Rating Yet'}
					</Button>
					<Button size="small" color="primary">
						Year: {item.year || 'No Year'}
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => props.onClick(item.id)}
					>
						Show Images
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

SimpleMediaCard.propTypes = {
	classes: PropTypes.object.isRequired,
	item: PropTypes.object,
};

export default withStyles(styles)(SimpleMediaCard);
