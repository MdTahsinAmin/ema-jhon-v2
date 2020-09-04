import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import Help from './components/Help/Help';
import Review from './components/Review/Review';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/home'>
           <Shop></Shop>
          </Route>
          <Route path='/review/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path='/inventory'>
             <Inventory></Inventory>
          </Route>
          <Route path='/help'>
             <Help></Help>
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route exact path ='/'>
            <Shop/>
          </Route>
          
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
