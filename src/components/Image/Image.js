import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage, getImage } from 'store/actions';
// import NoImage from 'assets/no-image.jpg';

const SIZE = 150;

class Image extends PureComponent {
	static propTypes = {
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
		addImage: PropTypes.func.isRequired,
		getImage: PropTypes.func.isRequired,
	};

	static defaultProps = {
		alt: 'Card Images',
	};

	state = {
		dataURL: '',
	};

	constructor(props: Object) {
		super(props);
		const dataURL = props.getImage(props.src);
		if (dataURL) {
			this.state = {
				dataURL,
			};
		}
	}

	/**
	 * This function will be used to convert images to base64
	 */
	getBase64FromImageUrl = (img: Object) => {
		const canvas = document.createElement('canvas');
		canvas.width = this.props.width; // We will not use the img.width because we have to cache the actual size
		canvas.height = this.props.height; // Similarly we will not use image height
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		const dataURL = canvas.toDataURL('image/png');
		this.props.addImage(this.props.src, dataURL);
	};

	/**
	 *
	 */

	handleImageLoad = (event: Object) => {
		if (event.target.complete) {
			this.getBase64FromImageUrl(event.target);
		}
	};

	/**
	 * render - description
	 *
	 * @return {type}  description
	 */

	render() {
		const { src } = this.props;
		const { dataURL } = this.state;
		if (dataURL) {
			return (
				<img src={dataURL} alt={this.props.alt} height={SIZE} width={SIZE} />
			);
		}
		return (
			<img
				src={src}
				crossOrigin="Anonymous"
				onLoad={this.handleImageLoad}
				alt={this.props.alt}
				height={SIZE}
				width={SIZE}
			/>
		);
	}
}

export default connect(
	null,
	{ addImage, getImage }
)(Image);
