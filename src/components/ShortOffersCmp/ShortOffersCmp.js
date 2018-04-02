import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ShortOffersCmp.min.css';

class ShortOffersCmp extends React.Component {
  render() {
    return (
      <div className="description">

        <div className="description-item">
          <h3 className="h3-left">Altany ogrodowe</h3>
          <p className="p-left">Rodzinne spotkanie? Grill ze znajomymi? Nasze altany będą idealnym miejsciem!</p>
          <img className="img-right" src={require('./../.././images/altana.png')}/>
         </div>

        <div className="description-item">
          <h3 className="h3-right">Meble</h3>
          <p className="p-right">Kawa o poranku? Rodzinny obiad? Nasze meble nadadzą się na każdą okazję.</p>
          <img className="img-left" src={require('./../.././images/meble.png')}/>
        </div>

        <div className="description-item">
          <h3 className="h3-left">Ozdoby</h3>
          <p className="p-left">Usuń monotonię i szarość ze swojego ogrodu. Nasze dekoracje tchną w niego nowe życie.</p>
          <img className="img-right" src={require('./../.././images/skrzynia.png')}/>
        </div>

        <div className="description-item">
          <h3 className="h3-right">Zadaszenia</h3>
          <p className="p-right">Nasze wiaty zapewnią Ci cień w upalny dzień, ale także ochornią przed deszczem.</p>
          <img className="img-left" src={require('./../.././images/zadaszenie.png')}/>
        </div>

        <div className="description-item">
          <h3 className="h3-left">Ogrodzenia</h3>
          <p className="p-left">Piękne i solidne ogrodzenia, nie tylko zapewniają bezpieczeństwo, lecz stanowią element dekoracyjny Twojego podwórka.</p>
          <img className="img-right" src={require('./../.././images/brama.png')}/>
        </div>

        <div className="description-item">
          <h3 className="h3-right">Inne</h3>
          <p className="p-right">Chciałbyś mieć coś czego inni nie mają? Masz niecodzienne pomysły? Skontaktuj się z nami!</p>
          <img className="img-left" src={require('./../.././images/drzwi.png')}/>
       </div>

    </div>
    );
  }
}

export default ShortOffersCmp;
