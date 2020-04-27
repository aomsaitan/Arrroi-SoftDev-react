import React from 'react';
import './App.css';
import Shop from './components/Shop/shop';
import Menu from './components/Menu/Menu';
import Notification from './components/Notification/Notification'
import 'firebase/storage';
import MyOrder from './components/MyOrder/MyOrder';

function App() {
  return (
    <div>
      {/* <Shop />  */}
      {/* <Menu nameFood = "เนื้อผัดน้ำมันหอย"/> */}
      <Notification/>
    {/* <MyOrder/> */}
    </div>
  )

}
export default App;
