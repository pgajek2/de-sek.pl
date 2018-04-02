import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import ProductGalleryCmp from './.././ProductGalleryCmp/ProductGalleryCmp';

import styles from './ProductDetailsCmp.min.css';

class ProductDetailsCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product : props.product
    }
  }

  render() {

    var productDetails = [];
    for ( var i = 0 ; i < this.state.product.details.length ; i++ ) {
        productDetails.push (
          <li key={i}>{this.state.product.details[i]}</li>
        );
    }

    var productGallery = [];
    for ( var i = 0 ; i < this.state.product.images.length ; i++ ) {
      productGallery.push ({
        original : require('./../.././images/slajd'+ this.state.product.images[i] +'.jpg'),
        thumbnail : require('./../.././images/slajd'+ this.state.product.images[i] +'.jpg'),
        description : this.state.product.name,
        thumbnailAlt : this.state.product.name
      });
    }

    return (
      <div className="product-details">

        <ProductGalleryCmp images={productGallery}/>

        <div className="product-content">
          <h1>{this.state.product.name}</h1>
          <div class="product-price">Cena: {this.state.product.price} zł</div>
          <ul>
            {productDetails}
          </ul>
          <div className="product-description">
            {this.state.product.description}
          </div>
        </div>

      </div>
    )
  };

}

export default ProductDetailsCmp;
