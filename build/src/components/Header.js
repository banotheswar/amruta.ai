import React from 'react'
import Industries from '../pages/Industries'
import Home from '../pages/Home';
import Oxaipage from '../pages/Oxaipage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (


      
        <div>
            

           
 <header class="header">    
    <div class="container">
      <div class="row">
        <div class="col-md-3"><a href="index.html"><img src="images/logo.png" alt="Amruta" title="Amruta"  class="logo"/></a>
          
        </div>
        <div class="col-md-9 text-right">
         
            <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="mainmenu ">
                <li class=""><NavLink to="/oxaipage"  class="">OXAI Software</NavLink></li>
                <li class=""><a href="#" class="">Industries <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                  <div class="submenu">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-3">
                          <ul>
                            <li><NavLink to="/financial-services"> Financial Servies </NavLink></li>
                             
                           
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <ul>
                          
                            <li><NavLink to="/health-care"> Health Care </NavLink></li>
                           
                          </ul>
                        </div>
                        <div class="col-md-2">
                          <ul>
                             
                            <li><NavLink to="/ecommerce-high-tech">Ecommerce & Hi-Tech</NavLink></li>
                         
                          
                          </ul>
                        </div>
                        <div class="col-md-4 text-right">
                          <ul>
                            
                            <li><NavLink to="/travel-logistics-supply-chain">Supply chain, Travel and Transportation></NavLink></li>
                        
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </li>
                 
                <li class=""><NavLink to="/resources"  class="">Resources</NavLink></li>
                <li class=""><NavLink to="/about-amruta"  class="">About Amruta</NavLink></li>
                {/* <li class=""><NavLink to="/academy"  class="">academy</NavLink></li> */}
                
                <li class="demo"><a href="#" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/krishnakanth-04/amrutaproduct'});return false;"  class="reqlink">Request A Demo</a></li>
              </ul></div>
            
            
        </div>
      </div>
    </div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
  </header>


        </div>
    )



    
}
    




export default Header
