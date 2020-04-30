import React from 'react';
import './App.css';
import Shop from './components/Shop/shop';
import Menu from './components/Menu/Menu';
import Notification from './components/Notification/Notification'
import 'firebase/storage';
import MySales from './components/MySales/MySales';
import OrderDetail from './components/OrderDetail/OrderDetail'

function App() {
  return (
    <div>
      {/* <Shop />  */}
      {/* <Menu nameFood = "เนื้อผัดน้ำมันหอย"/> */}
      {/* <Notification/> */}
      {/* <MySales/> */}
      <OrderDetail/>
    </div>
  )

}
export default App;
