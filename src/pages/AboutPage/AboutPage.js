import React from 'react';
import ReactDOM from 'react-dom';

import PageTitleCmp from './../../components/PageTitleCmp/PageTitleCmp';

import styles from './AboutPage.min.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitleCmp title="O nas"/>

        <div className="about">

          <div className="about-image-1">
            <img src={require('./../.././images/slajd1007.jpg')}/>
          </div>

          <p className="p-1">
              Nasza firma powstała w odpowiedzi na poszukiwanie wokół siebie piękna, stylu, tradycji i niepowtarzalności a tylko drewno łączy w sobie wszystkie te walory,
              ponieważ jest surowcem naturalnym, trwałym i estetycznym. Nawet starzenie się drewna ma w sobie urok, ponieważ wydobywa z niego szczególne piękno.
          </p>

          <div className="about-image-2">
            <img src={require('./../.././images/slajd1008.jpg')}/>
          </div>

          <p className="p-2">
               Nasze wyroby tworzymy ręcznie, co sprawia, że są oryginalne, wyjątkowe, niepowtarzalne. Nie ma dwóch takich samych egzemplarzy dzięki temu, że drewno
               jest niepowtarzalnym surowcem traktowanym przy każdym wyrobie w sposób szczególny.
          </p>

          <div className="about-image-3">
            <img src={require('./../.././images/slajd1009.png')}/>
          </div>

          <p className="p-3">
               Ponadto naszą ofertę dostosowujemy do indywidualnych potrzeb i oczekiwań klienta i jednocześnie służymy fachowym doradztwem przy dokonywaniu wyboru przy
               zamówieniu. Naszymi klientami są wielbiciele trwałości, wygody, szyku i niepowtarzalności w swoim otoczeniu, to osoby, które cenią wyjątkowość,
               piękno i naturalność, jaką łączy w sobie drewno.
          </p>

        </div>

      </div>
    )
  }
}

export default AboutPage;
