import React, { Component } from 'react'
import firebase from './firebase'

var storage = firebase.storage()
var storageRef = storage.ref()

function GetImage(HocComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            const { nameImg } = this.props;
            if( nameImg ){
                this.getImageFood(nameImg)
            }
            
        }
        getImageFood(image){
            storageRef.child(`Food/${image}.jpg`).getDownloadURL().then(function (url) {
                var store1 = document.getElementById(image)
                store1.src = url
            }).catch(function (error) { })
        };
        render(){
            return <HocComponent {...this.props}/>
        }
    }
}
export default GetImage;