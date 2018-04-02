/*  Library section */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

/* Styles section*/
import styles from './index.css';

/*  Pages serction */
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import OffersPage from './pages/OffersPage/OffersPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import HeaderCmp from './components/HeaderCmp/HeaderCmp';
import FooterCmp from './components/FooterCmp/FooterCmp';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <main>
          <HeaderCmp/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/galeria" component={GalleryPage}/>
          <Route path="/oferta" component={OffersPage}/>
          <Route path="/o-nas" component={AboutPage}/>
          <Route path="/kontakt" component={ContactPage}/>
          <Route path="/product-details/:productId" component={ProductDetailsPage}/>
          <FooterCmp/>
        </main>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
