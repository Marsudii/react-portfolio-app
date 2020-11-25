import React from "react";

class GalleryModal extends React.Component {
	componentDidMount() {
		document.body.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.body.removeEventListener('keydown', this.handleKeyDown);
	}

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

	render () {
		const {closeModal, findPrev, findNext, hasPrev, hasNext, source, bigImgAlt} = this.props;

		if (!source) {
			return null;
		}

		return (
			<div className="gallery-modal">
				<div className="modal-overlay" onClick={closeModal}></div>
				<div className="modal">
					<div className='modal-body'>
						{hasPrev && <span className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}></span>}
						{hasNext && <span className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}></span>}
						<span className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}></span>
						<img src={source} alt={bigImgAlt}/>
					</div>
				</div>
			</div>
		)
	}
}

export default GalleryModal;