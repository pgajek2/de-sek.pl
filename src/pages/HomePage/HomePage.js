import React from 'react';
import ReactDOM from 'react-dom';

import SliderCmp from './../../components/SliderCmp/SliderCmp';
import ShortOffersCmp from './../../components/ShortOffersCmp/ShortOffersCmp';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SliderCmp/>
        <ShortOffersCmp/>
      </div>
    )
  }
}

export default HomePage;
