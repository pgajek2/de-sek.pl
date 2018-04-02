import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import styles from './ProductCmp.min.css';

class ProductCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product : this.props.product
    }
  };

  render () {
    const image = {
      backgroundImage: 'url('+ require("./../.././images/slajd" + this.props.product.image + ".jpg") +')',
    };
    return (
      <div className="product-wrapper">
        <h3>{this.props.product.name}</h3>
        <p>Cena: {this.props.product.price} zł</p>
          <div className="product-content" style={image} productid={this.props.product.id}>
            <Link to={ "/product-details/"+ this.props.product.link+"/:"+this.props.product.id}/>
          </div>
      </div>
    )
  }
}

export default ProductCmp;
