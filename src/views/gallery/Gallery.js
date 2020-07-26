import React from "react";
import GalleryModal from '../../components/GalleryModal';

import './Gallery.scss';

import One from './images/pt.png';
import Two from './images/we.png';

const imgUrls = [
    One,
    Two
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