import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ProductsGridCmp.min.css';

import products from './../../data/products';

import ProductCmp from './../ProductCmp/ProductCmp'

class ProductsGridCmp extends React.Component{

  constructor(props) {
    super(props);
  };

  render () {
    var productList = [];
    for ( var i = 0; i < products.length; i++ ) {
      if ((this.props.category === 'all' || products[i].category === this.props.category) &&
          (this.props.minPrice <= products[i].price && this.props.maxPrice >= products[i].price) &&
           products[i].name.match(this.props.productName))  {
             productList.push(<ProductCmp product={products[i]}/>);
      }
    }
    return (
      <div className="products-grid">
        {productList}
      </div>
    )
  }
}

export default ProductsGridCmp;
