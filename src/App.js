import React from 'react';
import './App.css';
import Shop from './components/Shop/shop';
import Menu from './components/Menu/Menu';
import Notification from './components/Notification/Notification'
import 'firebase/storage';
import MySales from './components/MySales/MySales';
import OrderDetail from './components/OrderDetail/OrderDetail'
import MySalesDetail from './components/MySales/MySalesDetail'
function App() {
  return (
    <div>
      {/* <Shop />  */}
      {/* <Menu nameFood = "เนื้อผัดน้ำมันหอย"/> */}
      {/* <Notification/> */}
      {/* <MySales/> */}
      {/* <OrderDetail/> */}
      <MySalesDetail/>
    </div>
  )

}
export default App;
