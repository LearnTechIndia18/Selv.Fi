import React from 'react'; 
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Client from './Components/Client';
import About from './Components/About';
import Count from './Components/Count';
import Tabs from './Components/Tabs';
import Services from './Components/Services';
import Portfolio from './Components/PortFolio';
import Testimonial from './Components/Test';
import Price from './Components/Price';
import Faq from './Components/Faq';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import End from './Components/End';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render(){
    return (
      <Router>
 
          <div className="App">
              <header id="header" class="fixed-top d-flex align-items-center">
                <Header/>
              </header>
              <Hero/>
              <Switch>  
              <main id="main">
              <Route exact path="/Client" component={Client}/> 
              <Route exact path="/About" component={About}/> 
              <Route exact path="/Count" component={Count}/> 
              <Route exact path="/Tabs" component={Tabs}/> 
              <Route exact path="/Services" component={Services}/> 
              <Route exact path="/Portfolio" component={Portfolio}/> 
              <Route exact path="/Testimonial" component={Testimonial}/> 
              <Route exact path="/Price" component={Price}/> 
              <Route exact path="/Faq" component={Faq}/> 
              <Route exact path="/Team" component={Team}/> 
              <Route exact path="/Contact" component={Contact}/> 
              </main>
                </Switch>
     <footer id="footer">
       <div class="footer-top">
        <Footer/> 
        </div>
        <End/>
      </footer>     
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>  
      </div>
      </Router>);
}
 
}

export default App;
