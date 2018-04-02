import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import PageTitleCmp from './../../components/PageTitleCmp/PageTitleCmp';

import style from './ContactPage.min.css';

import $ from 'jquery';

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitleCmp title="Kontakt"/>
        <div className="contact">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80957.40654376066!2d20.88649120444043!3d50.64719629423287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717f075d4bdd22d%3A0x74553cbb8c8a24fb!2s28-225+Potok!5e0!3m2!1sen!2spl!4v1512680637145" style={{width: 100+'%', height: 400}} ></iframe>
          </div>
          <div className="contact-content">
              <p>Masz jakieś pytania?
                 Skontaktuj się z nami! </p>
              <h3><FontAwesome name='home' /> DE-SĘK </h3>
              <p> F.H.U Przemysław Bęben</p>
              <p>Potok 83, 28-225 Szydłów</p>
              <p><FontAwesome name='envelope-o' /> przemyslaw@de-sek.pl</p>
              <p><FontAwesome name='phone' /> +48 697 050 578</p>
          </div>
          <div className="social-media">
            <h3> Social media: </h3>
            <a href="https://www.youtube.com">
              <FontAwesome
                name='youtube'
                size='4x'
                style={{ color : '#ff0000', margin : '20px'}}
              />
            </a>
            <a href="https://www.facebook.com/De-S%C4%99k-Wszystko-co-z-drewna-1262554013834495/">
              <FontAwesome
                name='facebook-official'
                size='4x'
                style={{ color : '#3b5998', margin : '20px'}}
              />
            </a>
            <a href="https://www.youtube.com">
              <FontAwesome
                name='google-plus-official'
                size='4x'
                style={{ color : '#dd4b39', margin : '20px'}}
              />
            </a>
            <a href="https://plus.google.com/">
              <FontAwesome
                name='shopping-basket'
                size='4x'
                style={{ color : '#fbbc05', margin : '20px'}}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage;
