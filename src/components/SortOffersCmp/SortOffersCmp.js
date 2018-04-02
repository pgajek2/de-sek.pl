import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import style from './SortOffersCmp.min.css';

import $ from 'jquery';

class SortOffersCmp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      prevElement : null
    }
    this.setCategory = this.setCategory.bind(this);
    this.setMinMaxPrice = this.setMinMaxPrice.bind(this);
    this.setProductName = this.setProductName.bind(this);
  };

  componentDidMount(){
    var defaultElement = $('#all');
    defaultElement.addClass('selected');
    this.setState({
      prevElement : defaultElement
    });
  };

  setCategory(event) {
    var element = event.currentTarget;
    $(this.state.prevElement).removeClass('selected');
    this.setState({
      prevElement : element
    });
    $(element).addClass('selected');
    var categoryName = element.dataset.id;
    this.props.setCategory(categoryName); //parent pass method
  };

  setMinMaxPrice(event) {
    var minPrice = $('#minPrice').val();
    var maxPrice = $('#maxPrice').val();
    if(!minPrice || isNaN(minPrice)) { //if undefined, null, empty or string
      minPrice = 0;
    }
    if(!maxPrice || isNaN(maxPrice)) {
      maxPrice = 9999999;
    }
    this.props.setMinMaxPrice(minPrice, maxPrice);//parent pass method
  };

  setProductName(event) {
    var productName = $('#search-input').val();
    this.props.setProductName(productName);//parent pass method
  };

  render () {
    return (
      <div className="sort-offers">
        <ul>
          <li data-id="all" onClick={this.setCategory} id="all">Wszystkie</li>
          <li data-id="altany" onClick={this.setCategory}>Altany</li>
          <li data-id="meble" onClick={this.setCategory}>Meble</li>
          <li data-id="ozdoby" onClick={this.setCategory}>Ozdoby</li>
          <li data-id="zadaszenia" onClick={this.setCategory}>Zadaszenia</li>
          <li data-id="ogrodzenia" onClick={this.setCategory}>Ogrodzenia</li>
          <li data-id="inne" onClick={this.setCategory}>Inne</li>
          <li>
            Cena : {' '}
            <input placeholder="od" id="minPrice" onChange={this.setMinMaxPrice}/>
            <FontAwesome name='minus'
                         style={{ color : '#e6e6e6', margin : '5px'}}/>
            <input placeholder="do" id="maxPrice" onChange={this.setMinMaxPrice}/>
          </li>
          <li>
            <input placeholder="Szukaj... " type="text" id="search-input" onChange={this.setProductName}/>
          </li>
        </ul>
      </div>
    )
  }
}

export default SortOffersCmp;
