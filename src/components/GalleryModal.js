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
			<div className="gallery-modal">
				<div className="modal-overlay" onClick={closeModal}></div>
				<div className="modal">
					<div className='modal-body'>
						{hasPrev && <span className='modal-prev' onClick={findPrev} onKeyDown={handleKeyDown}></span>}
						{hasNext && <span className='modal-next' onClick={findNext} onKeyDown={handleKeyDown}></span>}
						<span className='modal-close' onClick={closeModal} onKeyDown={handleKeyDown}></span>
						<img src={source} alt={bigImgAlt}/>
					</div>
				</div>
			</div>
		)
	}
}

export default GalleryModal;