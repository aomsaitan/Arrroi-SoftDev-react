import React from 'react';
import './App.css';
import Shop from './components/Shop/shop';
import Menu from './components/Menu/Menu'
import 'firebase/storage';

function App() {
  return (
    <div>
      <Shop /> 
      {/* <Menu nameFood = "เนื้อผัดน้ำมันหอย"/> */}
    </div>
  )

}
export default App;
