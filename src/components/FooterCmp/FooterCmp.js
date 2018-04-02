import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import styles from './FooterCmp.min.css';

class FooterCmp extends React.Component {
  render() {
    return (
      <footer>

        <p>DE-SĘK.PL &copy; 2018 Gajek Piotr</p>

        <ul>

          <li>
            <a href="https://www.facebook.com/De-S%C4%99k-Wszystko-co-z-drewna-1262554013834495/">
              <p>Facebook</p>
              <FontAwesome
                name='facebook-official'
                size='2x'
                style={{ color : '#3b5998', margin : '5px'}}/>
            </a>
          </li>

          <li>
            <a href="https://plus.google.com/">
              <p>Olx</p>
              <FontAwesome
                name='shopping-basket'
                size='2x'
                style={{ color : '#fbbc05', margin : '5px'}}/>
            </a>
          </li>

          <li>
            <p>Kontakt</p>
            <FontAwesome
                name='user-circle'
                style={{ margin : '1px 10px 1px 1px'}}/>
            DE-SĘK
            <p>przemyslaw@de-sek.pl</p>
            <p>+ 48 697 050 578</p>
          </li>

        </ul>
      </footer>
    )
  }
}

export default FooterCmp;
