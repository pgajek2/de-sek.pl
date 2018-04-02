import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import styles from './SliderCmp.min.css';

class SliderCmp extends React.Component {
  render() {

    const photo01Url = {
        backgroundImage: 'url('+ require('./../.././images/slajd1016.jpg') +')',
    };
    const photo02Url = {
        backgroundImage: 'url('+ require('./../.././images/slajd1001.jpg') +')',
    };
    const photo03Url = {
        backgroundImage: 'url('+ require('./../.././images/slajd1002.jpg') +')',
    };
    const photo04Url = {
        backgroundImage: 'url('+ require('./../.././images/slajd1012.jpg') +')',
    };

    var settings = {
      arrows: false,
      dots: true,
      autoplay: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
        <Slider {...settings}>

          <div className="slider-item" style={photo01Url}>
            <div className="slider-item-content">
              <h1>... Bo sęk w tym, że drewno jest piękne ...</h1>
              <p>Nasza firma powstała w odpowiedzi na poszukiwanie wokół siebie piękna, stylu,
                tradycji i niepowtarzalności, a tylko drewno łączy w sobie wszystkie te walory.</p>
            </div>
          </div>

          <div className="slider-item" style={photo02Url}>
            <div className="slider-item-content">
              <h1>.. Wszystko co z drewna ...</h1>
              <p>Nasze wyroby tworzymy ręcznie, co sprawia, że są oryginalne, wyjątkowe, niepowtarzalne.
                Nie ma dwóch takich samych egzemplarzy dzięki temu, że drewno jest unikalnym
                surowcem traktowanym przy każdym wyrobie w sposób szczególny.</p>
            </div>
          </div>

          <div className="slider-item" style={photo03Url}>
            <div className="slider-item-content">
              <h1>... Indywidualna oferta ...</h1>
              <p>Naszą ofertę dostosowujemy do indywidualnych potrzeb i oczekiwań klienta,
                jednocześnie służymy fachowym doradztwem przy dokonywaniu wyboru przy zamówieniu.</p>
            </div>
          </div>

          <div className="slider-item" style={photo04Url}>
            <div className="slider-item-content">
              <h1>... Łączy nas piękno natury ...</h1>
              <p>Naszymi klientami są wielbiciele trwałości, wygody, szyku  i niepowtarzalności w swoim
                otoczeniu, to osoby, które cenią wyjątkowość, piękno i naturalność, jaką łączy w sobie drewno.</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}

export default SliderCmp;
