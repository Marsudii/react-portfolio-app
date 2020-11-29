import React from "react";
import GalleryModal from './GalleryModal';
import galleryData from './galleryData';
import './Gallery.scss';

class Interests extends React.Component {
	state = {
		currentIndex: null,
		itemsToShow: 4
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

	showMore = () => {
		if (this.state.itemsToShow < galleryData.length) {
			this.setState(state => ({
				itemsToShow: state.itemsToShow + 4
			}));
		} else {
			return galleryData.length;
		}
	}

	render() {
		const {currentIndex, itemsToShow} = this.state;
		const bigImg = galleryData.slice(0, itemsToShow).map(({bigImg}) => bigImg);
		const bigImgAlt = galleryData.slice(0, itemsToShow).map(({bigImgAlt}) => bigImgAlt);

		return (
			<div className="wrapper wrapper-container" >
				<h1 className="base-title">Images</h1>
				<h2 className="gallery-subtitle">For inspiration and just for fun</h2>
				<div className="gallery-container">
					<div className="gallery-grid">
						{galleryData.slice(0, itemsToShow).map(({img, imgAlt}, i) => {
							return (
								<div className="d-flex" onClick={(e) => this.openModal(e, i)} key={i}>
									<img className="gallery-img" src={img} alt={imgAlt} />
								</div>
							)
						})}
					</div>
					<button
						className="a nav-link" 
						style={{display: itemsToShow >= galleryData.length ? 'none' : 'block'}}
						onClick={this.showMore}>
							Show More
					</button>
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