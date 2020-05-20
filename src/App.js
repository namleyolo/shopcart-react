import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import axios from 'axios'

import './App.css';
import './assets/boostrap.css'
import './assets/cart.css'
import './assets/success.css'
import './assets/search.css'
import './assets/product.css'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import Slide from './components/layout/Slide';
import Product from './components/layout/Product';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <Header></Header>
        <h1>{counter}</h1>
        <button onClick={()=> dispatch({type : "INCREMENT" }) }> ++ </button>
        <button onClick={()=> dispatch({type : "DECREMENT" }) }> -- </button>
        <div className="container">
           <div className="row">
             <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                 <Slide></Slide>
                 <Product></Product>
             </div>
                 <Sidebar></Sidebar>

           </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
