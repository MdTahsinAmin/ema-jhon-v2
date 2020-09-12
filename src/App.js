import React, { createContext, useState } from 'react';
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

import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

 export const Usercontext = createContext();

function App() {
  
  const [signUser , setSignUser] = useState({});



  return (
    <Usercontext.Provider value={[signUser ,setSignUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/home'>
           <Shop></Shop>
          </Route>
          <Route path='/review/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>
          <PrivateRoute path='/inventory'>
             <Inventory></Inventory>
          </PrivateRoute>
          <Route path='/help'>
             <Help></Help>
          </Route>
          <Route path='/login'>
             <Login></Login>
          </Route>
          <PrivateRoute path='/shipment'>
             <Shipment/>
          </PrivateRoute>
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
    </Usercontext.Provider>
  );
}

export default App;
