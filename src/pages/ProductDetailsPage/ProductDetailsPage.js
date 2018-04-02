import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

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
      product : product,
      productsArray : []
    }
    this.createLinks = this.createLinks.bind(this);
    this.makeLinks = this.makeLinks.bind(this);
    this.createLinks();
  };

  //URL change event
  componentWillReceiveProps(){
    var url = window.location.href;
    var pom = url.split(':');
    var productId = pom[pom.length-1];
    console.log('url changee >> '+productId)
    this.setState({
      productId : productId
    });
  };

  createLinks() {
    console.log('createLinks');
    var altany = [];
    var meble = [];
    var ozdoby = [];
    var zadaszenia = [];
    var ogrodzenia = [];
    var inne = [];
    for ( var i=0 ; i < products.length ; i++ ) {
        if (products[i].category == "altany") {
          altany.push(products[i]);
        } else if (products[i].category == "meble") {
          meble.push(products[i]);
        } else if (products[i].category == "ozdoby") {
          ozdoby.push(products[i]);
        } else if (products[i].category == "zadaszenia") {
          zadaszenia.push(products[i]);
        } else if (products[i].category == "ogrodzenia") {
          ogrodzenia.push(products[i]);
        } else if (products[i].category == "inne") {
          inne.push(products[i]);
        }
    }
    this.makeLinks(altany);
    this.makeLinks(meble);
    this.makeLinks(ozdoby);
    this.makeLinks(zadaszenia);
    this.makeLinks(ogrodzenia);
    this.makeLinks(inne);
    console.log(this.state.productsArray);
  };

  makeLinks(array) {
    var help = null;
    var helpArray = this.state.productsArray;
    for ( var i=0 ; i<array.length; i++ ) {
      help = array[i];
      if (array.length > 1) {
        if (i == 0) {
          help.leftLink = null;
          help.rightLink = {
            id : array[i+1].id,
            link : array[i+1].link
          };
        } else if (i > 0 && i < array.length-1) {
          help.leftLink = {
            id : array[i-1].id,
            link : array[i-1].link
          };
          help.rightLink = {
            id : array[i+1].id,
            link : array[i+1].link
          };
        } else if (i == array.length-1) {
          help.leftLink = {
            id : array[i-1].id,
            link : array[i-1].link
          };
          help.rightLink = null;
        }
      } else {
        help.leftLink = null;
        help.rightLink = null;
      }
      helpArray.push(help);
    }
    this.setState({
      productsArray : helpArray
    })
  };

  render() {
    var passProduct = null;
    for ( var i=0; i<this.state.productsArray.length; i++ ) {
      if (this.state.productsArray[i].id == this.state.productId) {
        passProduct = this.state.productsArray[i];
        break;
      }
    }
    return (
      <div>
        <ProductDetailsCmp product={passProduct}/>
      </div>
    );
  }

}

export default ProductDetailsPage;
