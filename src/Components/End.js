import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class End extends Component{
    render(){
        return(
            <div class="container-fluid d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright <strong><span>Selvavel</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
              
                Designed by <a href="https://bootstrapmade.com/">Sel.Fi</a>
              </div>
            </div>
            <div class="social-links text-center text-md-end pt-3 pt-md-0">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/selva143.shan/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="https://www.linkedin.com/in/selvavel/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
  
        )
    }
}