import React, { Component } from 'react'
import firebase from './firebase'

var storage = firebase.storage().ref()
var storageRef

function GetImage(HocComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            const { nameFood } = this.props;
            if (nameFood) {
                this.getImageFood(nameFood)
            }
            const { nameIcon } = this.props;
            if (nameIcon) {
                this.getImageIcon(nameIcon)
            }
            // const { nameCover } = this.props;
            // if(nameCover){
            //     this.getImageCover(nameCover)
            // }
        }
        // getImageCover(image){
        //     storage.child(`Food/${image}.jpg`).getDownloadURL().then(function (url) {
        //         storageRef = document.getElementById(image+'-cover');
        //         storageRef.style.backgroundImage = `url(${url})`;
        //         console.log(storageRef.style)
        //         // storageRef.style.opacity = "0.4"
        //         storageRef.style.backgroundRepeat = "no-repeat"
        //         storageRef.style.backgroundPosition = "fixed"
        //     }).catch(function (error) { 
        //         console.log(error)
        //     })
        // }
        getImageFood(image) {
            storage.child(`Food/${image}.jpg`).getDownloadURL().then(function (url) {
                storageRef = document.getElementById(image)
                storageRef.src = url
            }).catch(function (error) { })
        };
        getImageIcon(image) {
            storage.child(`Icon/${image}.png`).getDownloadURL().then(function (url) {
                storageRef = document.getElementById(image)
                storageRef.src = url
            }).catch(function (error) { })
        };
        render() {
            return <HocComponent {...this.props} />
        }
    }
}
export default GetImage;