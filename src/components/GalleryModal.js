import React from "react";

class GalleryModal extends React.Component {
  
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal">
          <div className='modal-body'>
            {hasPrev && <span className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}></span>}
            {hasNext && <span className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}></span>}
            <span className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}></span>
            <img src={src} alt="big pic"/>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryModal;