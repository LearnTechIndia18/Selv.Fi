import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Header extends Component{
    render(){
        return(
          
    <div class="container-fluid d-flex align-items-center">
      <h1 class="logo me-auto"><Link to="/Selv.Fi">Selv.Fi<span>.net</span></Link></h1>
   
      <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""/></a> 

      <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light navbar-default navbar-inverse order-last order-lg-0">
        <ul>
          <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link class="nav-link scrollto" to="/About">About</Link></li>
          <li><Link class="nav-link scrollto" to="/Services">Services</Link></li>
          <li><Link class="nav-link scrollto " to="/Portfolio">Portfolio</Link></li>
          <li><Link class="nav-link scrollto" to="/Team">Team</Link></li>
          <li><Link to="/Blogs">Blog</Link></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link class="nav-link scrollto" to="/Contact">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav> 
      <Link to="/About" class="get-started-btn scrollto">Get Started</Link>
    </div>
 
        )
    }
}