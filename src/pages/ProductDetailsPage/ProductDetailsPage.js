import React from 'react';
import ReactDOM from 'react-dom';

import PageTitleCmp from './../../components/PageTitleCmp/PageTitleCmp';
import ProductDetailsCmp from './../../components/ProductDetailsCmp/ProductDetailsCmp';

import products from './../../data/products';

class ProductDetailsPage extends React.Component {

  constructor(props) {
    super(props);
    var url = window.location.href;
    var pom = url.split(':');
    var productId = pom[pom.length-1];
    var product = null;
    for ( var i=0; i<products.length; i++ ) {
      if (products[i].id == productId) {
        product = products[i];
        break;
      }
    }
    this.state = {
      productId : productId,
      product : product
    }
  };

  render() {
    return (
      <div>
        <ProductDetailsCmp product={this.state.product}/>
      </div>
    );
  }

}

export default ProductDetailsPage;
