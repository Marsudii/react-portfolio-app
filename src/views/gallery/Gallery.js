import React from "react";
import GalleryModal from '../../components/GalleryModal';

import './Gallery.scss';

import BurningMan from './images/burning-man.jpg';
import Deer from './images/deer.jpg';
import Tesla from './images/tesla-in-space.jpg';
import RedView from './images/red-view.jpg';
import Sky from './images/sky.jpg';
import Glass from './images/glass-of-truth.png';
import Salamandra from './images/salamandra.jpg';
import LazyGlory from './images/lazy.jpg';

const imgUrls = [
	BurningMan,
	RedView,
	Tesla,
	Sky,
	Deer,
	LazyGlory,
	Salamandra,
	Glass,
];
class Interests extends React.Component {

	constructor(props) {
		super(props);
		this.state = { currentIndex: null };
		this.closeModal = this.closeModal.bind(this);
		this.findNext = this.findNext.bind(this);
		this.findPrev = this.findPrev.bind(this);
		this.renderImageContent = this.renderImageContent.bind(this);
	}
	renderImageContent(src, index) {
		return (
			<div onClick={(e) => this.openModal(e, index)}>
				<img className="gallery-img" src={src} key={src} alt="what did tou see?"/>
			</div>
		) 
	}
	openModal(e, index) {
		this.setState ({ currentIndex: index });
	}
	closeModal(e) {
		if (e !== undefined) {
			e.preventDefault();
		}
		this.setState ({ currentIndex: null });
	}
	findPrev(e) {
		if (e !== undefined) {
			e.preventDefault();
		}
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex -1
		}));
	}
	findNext(e) {
		if (e !== undefined) {
			e.preventDefault();
		}
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1
		}));
	}
	render() {
		return (
			<div className="wrapper wrapper-container">
				<h1 className="base-title">Images</h1>
				<h2 className="gallery-subtitle">For inspiration and just for fun</h2>
				<div className="gallery-container">
					<div className="gallery-grid">
						{imgUrls.map(this.renderImageContent)}
					</div>
					<GalleryModal
						closeModal={this.closeModal} 
						findPrev={this.findPrev} 
						findNext={this.findNext} 
						hasPrev={this.state.currentIndex > 0} 
						hasNext={this.state.currentIndex + 1 < imgUrls.length} 
						src={imgUrls[this.state.currentIndex]} 
					/>
				</div>
			</div>
		)
	}
}

export default Interests;