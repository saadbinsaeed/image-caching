import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Card from 'components/Card/Card';
import Dialog from 'components/Dialog/Dialog';
import ImageGrid from 'components/Grid/ImageGrid';
import Grid from '@material-ui/core/Grid';

class MainPage extends Component {
	static propTypes = {
		isLoading: PropTypes.bool,
		data: PropTypes.array,
	};

	static defaultProps = {
		isLoading: false,
		data: [],
	};

	state = {
		open: false,
		cardImages: [],
		dialogTitle: '',
	};

	handleClick = (id: string) => {
		const obj = (this.props.data || []).find(item => item.id === id);
		this.setState({
			open: true,
			cardImages: obj.cardImages,
			dialogTitle: obj.headline,
		});
	};

	handleClose = (event: Object) => {
		this.setState({ open: false });
	};

	chunkArray(myArray, chunk_size) {
		const clonedArray = myArray.slice(); // Deep copying the array
		let results = [];
		while (clonedArray.length) {
			results.push(clonedArray.splice(0, chunk_size));
		}
		return results;
	}
	render() {
		const { isLoading, data } = this.props;
		const { dialogTitle, cardImages } = this.state;
		if (isLoading) {
			return <CircularProgress style={{ marginTop: '45vh', marginLeft: '50%'}} />;
		}
		const cardsArray = this.chunkArray(data, 3);
		return (
			<div>
				<Grid>
					{(cardsArray || []).map((arr, index) => (
						<div key={index}>
							<Grid container spacing={8}>
								{(arr || []).map(item => (
									<Grid item md={4} key={item.id}>
										<Card item={item} onClick={this.handleClick} />
									</Grid>
								))}
							</Grid>
							<br />
							<Divider light />
							<br />
						</div>
					))}
				</Grid>

				<Dialog
					open={this.state.open}
					title={dialogTitle}
					onClose={this.handleClose}
				>
					<ImageGrid images={cardImages} />
				</Dialog>
			</div>
		);
	}
}

export default connect(state => ({
	isLoading: state.app.isLoading,
	data: state.app.data,
}))(MainPage);
