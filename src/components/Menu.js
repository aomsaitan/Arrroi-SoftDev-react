import React, { Component } from 'react'
import firebase from './firebase'
var storage = firebase.storage()
var storageRef = storage.ref() 

class  Menu extends Component{
   constructor(){
       super() 
       this.getImageIcon('networking')   
       this.getImageIcon('pan')
   }
  
   getImageFood(image){        
       storageRef.child(`Food/${image}.jpg`).getDownloadURL().then(function(url) {           
        var store1 = document.getElementById(image)
            store1.src = url      
      }).catch(function(error) {})
   }
   getImageIcon(image){        
       storageRef.child(`Icon/${image}.png`).getDownloadURL().then(function(url) {           
        var store1 = document.getElementById(image)
            store1.src = url      
      }).catch(function(error) {})
   }

   render(){
        return(
            <body>
                <h1 class = "textS">เนื้อผัดน้ำมันหอย</h1>

                <div class = "menu textS">
                    <div class = "desOut">
                        <img id = 'networking' alt = 'networking'/>                    
                        <p> สำหรับ 6 ที่</p>
                    </div>
                    <div class = "desOut">
                        <img id ='pan' alt = 'pan'/>
                        <p>ส่วนผสม</p>
                    </div>
                </div>
            </body>
        )
    } 
     
}
export default Menu;
       