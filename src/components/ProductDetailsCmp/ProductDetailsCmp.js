import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ProductGalleryCmp from './.././ProductGalleryCmp/ProductGalleryCmp';

import styles from './ProductDetailsCmp.min.css';

class ProductDetailsCmp extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    var productDetails = [];
    for ( var i = 0 ; i < this.props.product.details.length ; i++ ) {
        productDetails.push (
          <li key={i}>{this.props.product.details[i]}</li>
        );
    }

    var productGallery = [];
    for ( var i = 0 ; i < this.props.product.images.length ; i++ ) {
      productGallery.push ({
        original : require('./../.././images/slajd'+ this.props.product.images[i] +'.jpg'),
        thumbnail : require('./../.././images/slajd'+ this.props.product.images[i] +'.jpg'),
        thumbnailAlt : this.props.product.name
      });
    }
    console.log(productGallery);
    const leftCmp = this.props.product.leftLink ? (
      <div>
        <Link to = { "/product-details/"+ this.props.product.leftLink.link+"/:"+this.props.product.leftLink.id}>
          <FontAwesome name='chevron-left'
                       style={{ color: '#666' }} />
        </Link>
      </div>
    ) : (
      <div></div>
    );

    const rightCmp = this.props.product.rightLink ? (
      <div>
        <Link to = { "/product-details/"+ this.props.product.rightLink.link+"/:"+this.props.product.rightLink.id}>
             <FontAwesome name='chevron-right'
                          style={{ color: '#666'}} />
        </Link>
      </div>
    ) : (
      <div></div>
    );

    return (
      <div className="product-details">

        <ProductGalleryCmp images={productGallery}/>

        <div className="product-content">
          <h1>{this.props.product.name}</h1>
          <div class="product-price">Cena: {this.props.product.price} zł</div>
          <div className="product-navigation">
              {leftCmp}
              {rightCmp}
          </div>
          <ul>
            {productDetails}
          </ul>
          <div className="product-description">
            {this.props.product.description}
          </div>
        </div>

      </div>
    )
  };

}

export default ProductDetailsCmp;
