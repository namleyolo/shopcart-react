import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'


import './App.css';
import './assets/boostrap.css'
import './assets/cart.css'
import './assets/success.css'
import './assets/search.css'
import './assets/product.css'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import Test from './components/layout/Test';
import Slide from './components/layout/Slide';
import Product from './components/layout/Products/Product';
import ProductDetail from './components/layout/Products/ProductDetail';

function App() {
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();

  return (
      <Switch>
          {/*<Route exact path='/'  />*/}
          <Route exact path='/product/:id' component={ProductDetail}/>
          <div className="App">
             <Header></Header>
                 {/*<h1>{counter}</h1>*/}
                 {/*<button onClick={()=> dispatch({type : "INCREMENT" }) }> ++ </button>*/}
                  {/*<button onClick={()=> dispatch({type : "DECREMENT" }) }> -- </button>*/}
               <div className="container">
           <div className="row">
             <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                 {/*<Slide></Slide>*/}
                 <Test></Test>
                 {/*<Product></Product>*/}
             </div>
                 {/*<Sidebar></Sidebar>*/}

           </div>
        </div>
              {/*<Footer></Footer>*/}
           </div>
      </Switch>

  );
}

export default App;
