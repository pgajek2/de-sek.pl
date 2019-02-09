import React from 'react';
import ReactDOM from 'react-dom';

import style from './GalleryPage.min.css';

import GalleryCmp from './../../components/GalleryCmp/GalleryCmp';
import PageTitleCmp from './../../components/PageTitleCmp/PageTitleCmp';
import photos from './../.././data/images';


class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var galleryPhotos = [];
    for (var i=0 ; i<photos.length ; i++) {
      photos[i].width   = 4,
      photos[i].height  = 3,
      photos[i].alt     = 'de-sek.pl',
      photos[i].caption = 'DE-SĘK.PL'
    }
    return (
      <div className="gallery-page">
        <PageTitleCmp title="Galeria"/>
        <GalleryCmp photos={photos}/>
      </div>
    )
  }
}

export default GalleryPage;
