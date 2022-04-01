import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
export default class Hero extends Component{
    render(){
        return(
          
            <section id="hero" class="d-flex align-items-center">

            <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
              <div class="row">
                <div class="col-xl-6">
                  <h1>Bettter digital experience with Presento</h1>
                  <h2>We are team of talented designers making websites with Bootstrap</h2>
                  <Link to="/About"class="btn-get-started scrollto">Get Started</Link>
                </div>
              </div>
            </div>
            </section>
 
        )
    }
}