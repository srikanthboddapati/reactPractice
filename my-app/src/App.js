
import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './conditional';
import NumberList from './List';
import ShopingCart from './ShopingCart';
import Login from './components/login/login';
import CakeContainer from './components/cakes/CakeContainer';
import IceCreamContainer from './components/cakes/IceCreamContainer'


 
function App(props) {
  // let numbers = [1,2,3,4];
  
  //  let products = [
  //    {   "id":0,
  //        "Brandname":"Cello",
  //        "productname":"pen",
  //        "Quantity":1,
  //        "Price" : 498,
  //        "MRP":480,
  //        "imageURL" : "https://images.app.goo.gl/V4MbaNHA74NNSFkY6",
  //        "OfferText" : "18",
  //        "count" : 0
  //    },
  //    {   "id":1,
  //        "Brandname":"Ammul",
  //        "productname":"Milk",
  //        "Quantity":1,
  //        "Price" : 460,
  //        "MRP":439,
  //        "imageURL" : "https://images.app.goo.gl/7GENFKC1MevRcw2f6",
  //        "OfferText" : "21",
  //        "count" : 0
  //    },
  //    {   "id":2,
  //        "Brandname":"Ammul",
  //        "productname":"Milk",
  //        "Quantity":1,
  //        "Price" : 460,
  //        "MRP":460,
  //        "imageURL" : "https://images.app.goo.gl/J3Vnj4Z84UZfYRXUA",
  //        "OfferText" : "No Offer",
  //        "count" : 0
  //    }
  // ]
  
  
  return (
    <Provider store = {store}>
    <div className="App">
         {/* <Test date = {props.date} text = {props.text} author = {props.author}/>
         <Clock/>
         <Toggle/>
         <LoginControl/>
         <NumberList list = {numbers}/> */}
         {/* <ShopingCart products = {products}/> */}
         {/* <Login /> */}
         <CakeContainer/>
         <IceCreamContainer/>
         </div>
    </Provider>   
    
  );
}

 export default App;

