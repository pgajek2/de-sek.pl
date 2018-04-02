import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import styles from './GalleryCmp.min.css';

class GalleryCmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      photos: props.photos
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
    this.forceUpdate();
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    var gallery = [];
    for( var i=0; i<this.state.photos.length; i++ ) {
      gallery.push(<img src={this.state.photos[i].src} onClick={this.openLightbox} key={i}/>)
    }
    return (
      <div className="gallery">
        <Gallery photos={this.state.photos} onClick={this.openLightbox} margin={10} columns={7}/>
        <Lightbox
          images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
          closeButtonTitle="Zamknij"
          leftArrowTitle="Poprzedni"
          rightArrowTitle="Następny"
        />
      </div>
    );
  }
}

export default GalleryCmp;
