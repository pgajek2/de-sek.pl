import React from 'react';
import ReactDOM from 'react-dom';

import styles from './OffersPage.min.css';

import PageTitleCmp from './../../components/PageTitleCmp/PageTitleCmp';
import ProductsGridCmp from './../../components/ProductsGridCmp/ProductsGridCmp';
import SortOffersCmp from './../../components/SortOffersCmp/SortOffersCmp';


class OffersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category : 'all',
      minPrice : 0,
      maxPrice : 9999999,
      productName : ''
    }
    this.setCategory = this.setCategory.bind(this);
    this.setMinMaxPrice = this.setMinMaxPrice.bind(this);
    this.setProductName = this.setProductName.bind(this);
  };

  setCategory(categoryName) {
    console.log('categoryName ' + categoryName);
    this.setState({
      category : categoryName
    });
  };

  setMinMaxPrice(minPrice, maxPrice) {
    console.log('minPrice '+ minPrice);
    console.log('maxPrice '+ maxPrice);
    this.setState({
      minPrice : minPrice,
      maxPrice : maxPrice
    });
  };

  setProductName(productName) {
    console.log('productName '+ productName);
    this.setState({
      productName : productName
    });
  };

  render() {
    return (
      <div className="offers">
        <PageTitleCmp title="Oferta"/>
        <SortOffersCmp setCategory={this.setCategory}
                       setMinMaxPrice={this.setMinMaxPrice}
                       setProductName={this.setProductName}
                       />
        <ProductsGridCmp category={this.state.category}
                         minPrice={this.state.minPrice}
                         maxPrice={this.state.maxPrice}
                         productName={this.state.productName}
                         />
      </div>
    );
  }

}

export default OffersPage;
