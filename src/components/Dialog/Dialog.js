import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ScrollDialog = (props: Object) => {
	return (
		<div>
			<Dialog
				open={props.open}
				onClose={props.onClose}
				scroll="body"
				aria-labelledby="scroll-dialog-title"
			>
				<DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
				<DialogContent>{props.children}</DialogContent>
				<DialogActions>
					<Button onClick={props.onClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

ScrollDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
};

ScrollDialog.defaultProps = {
	title: 'No Title',
};

export default ScrollDialog;
