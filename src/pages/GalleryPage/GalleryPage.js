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
    return (
      <div className="gallery-page">
        <PageTitleCmp title="Galeria"/>
        <GalleryCmp photos={photos}/>
      </div>
    )
  }
}

export default GalleryPage;
