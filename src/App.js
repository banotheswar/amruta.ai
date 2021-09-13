import './App.css';
import './index.css'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom';
import Industries from './pages/Industries';
import Oxaipage from './pages/Oxaipage';
import CasePage from './pages/CasePage';
import Resoucespage from './pages/Resoucespage';
import Aboutpage from './pages/Aboutpage';
import Header from '../src/components/Header'
import Hero from './components/about/Hero';
import Xai from './components/Oxai/Xai';
import Xaiplatform from './components/Oxai/Xaiplatform';
import Usecases from './components/finance/Usecases';
import Getstarted from './components/Oxai/Getstarted';
import Footer from './components/Footer';
import Healthcare from './pages/Healthcare';
import Ecommercehight from './pages/Ecommercehight';
import TravelSuplychain from './pages/TravelSuplychain';
import Academypage from './pages/Academypage';
function App() {
  return (

   <div>
 
<Switch>

<Route  path="">
            <Home />
          </Route>


         
         
          <Route path="/financial-services">
            <Industries />
          </Route>
          <Route path="/health-care">
            <Healthcare />
          </Route>
          <Route path="/ecommerce-high-tech">
            < Ecommercehight />
          </Route>
          <Route path="/travel-logistics-supply-chain">
            < TravelSuplychain/>
          </Route>



         
          <Route path="/oxaipage">
            <Oxaipage />
          </Route>

          <Route path="/Case">
            <CasePage />
          </Route>


          <Route path="/resources">
            <Resoucespage />
          </Route>

          <Route path="/about-amruta">
            <Aboutpage />
          </Route>
          
          <Route path="/financial-services">
            <Industries />
          </Route>
          <Route path="/academy">
            <Academypage />
          </Route>
</Switch>



          
        


    

   </div>
  );





}

export default App;
