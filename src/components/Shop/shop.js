import React, { Component } from 'react'
import './Shop.css';
import ShopField from './shopField';
import GetImage from '../GetImage';
import firebase from '../firebase'
class Shop extends Component {
    constructor() {
        super();
        this.state = {
            store: "",
        };
    }
    componentDidMount = async () => {
        await this.importdata();
    };
    importdata = async () => {
        let tmp = [];
        let db = firebase.firestore();
        await db
            .collection("store").orderBy("star", "desc")
            .get()
            .then((querysnapshot) => {
                querysnapshot.forEach((documentsnapshot) => {
                    //console.log(documentsnapshot.data());
                    tmp.push(documentsnapshot.data());
                });
                this.setState({
                    store: tmp,
                });
            })
            .catch(function (error) {
                console.log("Error", error);
            });
    };
    render() {
        if (this.state.store !== "") {
            console.log(this.state.store)
            return (
                <body>
                    <h1 class="textS"> ร้านค้าแนะนำ  </h1>
                    {this.state.store.map((store) => {
                        return <ShopField
                            nameShop={store.name}
                            nameFood={store.name}
                            des={store.detail}
                            star={store.star}
                            county={store.address}
                        />
                    })}
                </body>
            )
        }
        else {
            return null;
        }
    }
}
export default GetImage(Shop)



