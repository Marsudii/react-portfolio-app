import React from "react";

class GalleryModal extends React.Component {
	handleKeyDown = (e) => {
		if (e.keyCode === 27) {
			this.props.closeModal();
		}
		if (e.keyCode === 37 && this.props.hasPrev) {
			this.props.findPrev();
		}
		if (e.keyCode === 39 && this.props.hasNext){
			this.props.findNext();
		}
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	render () {
		const {closeModal, findPrev, findNext, hasPrev, hasNext, source, bigImgAlt} = this.props;
		const {handleKeyDown} = this;

		if (!source) {
			return null;
		}

		return (
			<div className="gallery-modal d-flex-c-c pos-abs">
				<div className="overlay pos-abs" onClick={closeModal}></div>
				{hasPrev && <span className='modal-prev' onClick={findPrev} onKeyDown={handleKeyDown}></span>}
				<img src={source} alt={bigImgAlt}/>
				{hasNext && <span className='modal-next' onClick={findNext} onKeyDown={handleKeyDown}></span>}
			</div>
		)
	}
}

export default GalleryModal;