import React from "react";
import GalleryModal from '../../components/GalleryModal';
import galleryData from './galleryData';
import './Gallery.scss';

class Interests extends React.Component {
	state = {
		currentIndex: null
	}

	openModal = (e, index) => {
		this.setState ({
			currentIndex: index
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
		const bigImg = galleryData.map(item => item.bigImg);
		const bigImgAlt = galleryData.map(item => item.bigImgAlt);

		return (
			<div className="wrapper wrapper-container">
				<h1 className="base-title">Images</h1>
				<h2 className="gallery-subtitle">For inspiration and just for fun</h2>
				<div className="gallery-container">
					<div className="gallery-grid">
						{galleryData.map((item, index) => {
							return (
								<div onClick={(e) => this.openModal(e, index)} key={item.keyId}>
									<img className="gallery-img" src={item.img} alt={item.imgAlt} />
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