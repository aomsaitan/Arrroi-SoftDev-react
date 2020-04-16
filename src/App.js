import React from 'react';
import './App.css';
import Shop from './components/shop';
import Menu from './components/Menu'
import 'firebase/storage';

function App() { 
  return(
    <div>
      <Shop/>
             {/* <Menu/> */}
    </div>    
  )

}
export default App;
