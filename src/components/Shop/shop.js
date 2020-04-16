import React, { Component } from 'react'
import './Shop.css';
import ShopField from './shopField';
import GetImage from '../GetImage';
class Shop extends Component {
    render() {
        return (
            <body>
                <div  id={this.props.nameCover+'-cover'}>
                    <h1 class="textS"> ร้านแนะนำ  </h1>
                </div>
                <ShopField
                    nameShop = "ออมสินขายเนื้อ"
                    nameFood="ร้านขายเนื้อ"
                    des="ขายเนื้อวัวเกรดดี นำเข้าจากญี่ปุ่นทุกวัน ราคาถูก มีบริการส่งฟรีถึงบ้าน"
                    star={5}
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="ก๊อกแก๊กผักสด"
                    nameFood="ร้านขายผัก"
                    star={4}
                    des="ผักสดจากสวน ไม่มีร้านไหนสดเท่านี้อีกแล้วจ้า ไม่ใช้ยาฆ่าแมลงปลอดภัยแน่นอน"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="พิมพิดาค้าขาย"
                    nameFood="ร้านขายเครื่องปรุง"
                    star={3}
                    des="(จัดโปรต้อนรับเปิดร้าน) ซอสมะเขือเทศ พริกไทย น้ำปลาถูกๆ"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="เก็ตอยากขาย"
                    nameFood="ร้าน"
                    star={2}
                    des="ขายทุกอย่าง ไตก็ขาย ส่งของเฉพาะวัน จ-ศ"
                    county="จังหวัดระยอง"></ShopField>
                <ShopField
                    nameShop="ฟอร์ดขายหมู"
                    nameFood="ร้านขายหมู"
                    star={0}
                    des="ขายหมูสไลด์สำหรับชาบู สั่ง 5 แพ็คส่งฟรีทั่วโลก"
                    county="จังหวัดขอนแก่น"></ShopField>
            </body>

        )
    }

}
export default GetImage(Shop)



