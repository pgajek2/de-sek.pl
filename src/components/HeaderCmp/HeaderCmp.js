import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import styles from './HeaderCmp.min.css';

import $ from "jquery";

class HeaderCmp extends React.Component {

  constructor(props) {
    super(props);
    //set Current Active Tab
    var url = window.location.href;
    var pom = url.split('/');
    var productId = pom[pom.length-1];
    var activeTab = 1;
    if (productId == "galeria") {
      activeTab = 2;
    } else if (productId == "oferta" || productId.match(":")) {
      activeTab = 3;
    } else if (productId == "o-nas") {
      activeTab = 4;
    } else if (productId == "kontakt") {
      activeTab = 5;
    } else {
      activeTab = 1;
    }
    this.state = {
      activeTab : activeTab
    }
    this.setActiveTab = this.setActiveTab.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.mobileMenu = this.mobileMenu.bind(this);
  };

  setActiveTab(event) {
    this.setState({
      activeTab : event.currentTarget.dataset.id
    }, () => {
      console.log(this.state.activeTab)
      if (this.state.activeTab == 1) {
        console.log('home');
        $('#nav a').css( "color", "white" );
        $('#nav li').css( "text-shadow", "1px 1px 0px rgba(0, 0, 0, 1);" );
      } else {
        console.log('another');
        $('#nav a').css( "color", "#666" );
        $('#nav li').css( "text-shadow", "none" );
      }
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    var nav = $( "#nav" );
    var navHeight = nav.innerHeight();//nav height
    var currentPosition = nav.offset().top;//current Position
    if (currentPosition > navHeight) {
      nav.addClass("stick-nav");
    } else {
      nav.removeClass("stick-nav");
    }
  };

  mobileMenu() {
    $('#nav ul').toggleClass("hide");
  };

  render() {
    return (
      <nav id="nav" >
        <div className="mobile" onClick={this.mobileMenu}>
          <FontAwesome
            name='bars'
            size='2x'
            style={{ color : '#e6e6e6' }}/>
        </div>
        <div className="logo">
          <img src={require('./../.././images/logo.png')} alt="de-sęk logo"/>
        </div>
        <ul onScroll={this.handleScroll}>
          <Link to="/">
            <li onClick={this.setActiveTab} data-id="1" className={this.state.activeTab == 1 ? "active-tab" : ""} >Home</li>
          </Link>
          <Link to="/galeria">
            <li onClick={this.setActiveTab} data-id="2" className={this.state.activeTab == 2 ? "active-tab" : ""} >Galeria</li>
          </Link>
          <Link to="/oferta">
            <li onClick={this.setActiveTab} data-id="3" className={this.state.activeTab == 3 ? "active-tab" : ""} >Oferta</li>
          </Link>
          <Link to="/o-nas">
            <li onClick={this.setActiveTab} data-id="4" className={this.state.activeTab == 4 ? "active-tab" : ""} >O nas</li>
          </Link>
          <Link to="/kontakt">
            <li onClick={this.setActiveTab} data-id="5" className={this.state.activeTab == 5 ? "active-tab" : ""} >Kontakt</li>
          </Link>
        </ul>
        <div className="social"> //future
          <a href="https://www.facebook.com/De-S%C4%99k-Wszystko-co-z-drewna-1262554013834495/">
            <FontAwesome
              name='facebook-official'
              size='1x'
              style={{ color : '#3b5998', margin : '5px'}}/>
          </a>
        </div>
      </nav>
    )
  }

}

export default HeaderCmp;
