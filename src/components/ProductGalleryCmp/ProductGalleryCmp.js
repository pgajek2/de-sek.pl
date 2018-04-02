import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

import styles from './ProductGalleryCmp.min.css';

class ProductGalleryCmp extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
        <div className="product-gallery">
          <ImageGallery items={this.props.images}
                        thumbnailPosition="left"
                        showBullets={true}
                        showPlayButton={false}
                        showNav={false}
                        />
        </div>
    );
  }

}

export default ProductGalleryCmp;
