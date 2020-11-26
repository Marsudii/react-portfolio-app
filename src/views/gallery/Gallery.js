import React from "react";
import GalleryModal from '../../components/GalleryModal';
import galleryData from './galleryData';
import './Gallery.scss';

class Interests extends React.Component {
	state = {
		currentIndex: null
	}

	openModal = (e, i) => {
		this.setState ({
			currentIndex: i
		});
	}

	closeModal = () => {
		this.setState ({
			currentIndex: null
		});
	}

	findPrev = () => {
		this.setState(state => ({
			currentIndex: state.currentIndex - 1
		}));
	}
	
	findNext = () => {
		this.setState(state => ({
			currentIndex: state.currentIndex + 1
		}));
	}

	render() {
		const {currentIndex} = this.state;
		const bigImg = galleryData.map(({bigImg}) => bigImg);
		const bigImgAlt = galleryData.map(({bigImgAlt}) => bigImgAlt);

		return (
			<div className="wrapper wrapper-container">
				<h1 className="base-title">Images</h1>
				<h2 className="gallery-subtitle">For inspiration and just for fun</h2>
				<div className="gallery-container">
					<div className="gallery-grid">
						{galleryData.map(({img, imgAlt}, i) => {
							return (
								<div onClick={(e) => this.openModal(e, i)} key={i}>
									<img className="gallery-img" src={img} alt={imgAlt} />
								</div>
							)
						})}
					</div>
					<GalleryModal
						closeModal={this.closeModal}
						findPrev={this.findPrev}
						findNext={this.findNext}
						hasPrev={currentIndex > 0}
						hasNext={currentIndex + 1 < bigImg.length}
						source={bigImg[currentIndex]}
						bigImgAlt={bigImgAlt[currentIndex]}
					/>
				</div>
			</div>
		)
	}
}

export default Interests;