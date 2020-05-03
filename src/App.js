import React from 'react';
import './App.css';
import Shop from './components/Shop/shop';
import Menu from './components/Menu/Menu';
import Notification from './components/Notification/Notification'
import 'firebase/storage';
import MySales from './components/MySales/MySales';
import OrderDetail from './components/OrderDetail/OrderDetail'
import MySalesDetail from './components/MySales/MySalesDetail'
import EmptyCart from './components/Empty/EmptyCart'
import EmptyOrder from './components/Empty/EmptyOrder'
import MyShop from './components/MyShop/MyShop'
function App() {
  return (
    <div>
      {/* <Shop />  */}
      {/* <Menu nameFood = "เนื้อผัดน้ำมันหอย"/> */}
      {/* <Notification/> */}
      {/* <MySales/> */}
      {/* <OrderDetail/> */}
      {/* <MySalesDetail/> */}
      {/* <EmptyCart/> */}
      {/* <EmptyOrder/> */}
      <MyShop />
    </div>
  )

}
export default App;
