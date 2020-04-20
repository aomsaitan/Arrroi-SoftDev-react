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
			.collection("store")
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
        if(this.state.store !== ""){
            console.log(this.state.store)       
        return (
            <body>
            {/* <body id={this.props.nameCover+'-cover'}> */}
                
                    <h1 class="textS"> ร้านค้า  </h1>
                    {this.state.store.map((store) => {return <ShopField 
                    nameShop = {store.name} 
                    nameFood = {store.name}
                    des = {store.detail}
                    star = {store.star}
                    county = {store.address}
                    />})}
                {/* <ShopField
                    nameShop = "ออมสินขายเนื้อ"
                    nameFood="ออมสินขายเนื้อ"
                    des="ขายเนื้อวัวเกรดดี นำเข้าจากญี่ปุ่นทุกวัน ราคาถูก มีบริการส่งฟรีถึงบ้าน"
                    star="5"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="ก๊อกแก๊กผักสด"
                    nameFood="ร้านขายผัก"
                    star="4"
                    des="ผักสดจากสวน ไม่มีร้านไหนสดเท่านี้อีกแล้วจ้า ไม่ใช้ยาฆ่าแมลงปลอดภัยแน่นอน"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="พิมพิดาค้าขาย"
                    nameFood="ร้านขายเครื่องปรุง"
                    star="3"
                    des="(จัดโปรต้อนรับเปิดร้าน) ซอสมะเขือเทศ พริกไทย น้ำปลาถูกๆ"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="เก็ตอยากขาย"
                    nameFood="ร้าน"
                    star="2"
                    des="ขายทุกอย่าง ไตก็ขาย ส่งของเฉพาะวัน จ-ศ"
                    county="จังหวัดระยอง"></ShopField>
                <ShopField
                    nameShop="ฟอร์ดขายหมู"
                    nameFood="ร้านขายหมู"
                    star="0"
                    des="ขายหมูสไลด์สำหรับชาบู สั่ง 5 แพ็คส่งฟรีทั่วโลก"
                    county="จังหวัดขอนแก่น"></ShopField> */}
                    
            </body>

        )
        }
        else{
            return null;
        }
    }

}
export default GetImage(Shop)



