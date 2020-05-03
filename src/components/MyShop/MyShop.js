import React, { Component } from 'react'
import './MyShop.css'
import MyShopField from './MyShopField'
class MyShop extends Component{
    render(){
        return(
            // <body className = "textS">
            // <h1 align="center">ออมสินขายเนื้อ</h1>
            // <div className = "MyShop row-flex">
            //     <div className = "shopcover"><img src = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Food%2F%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD.jpg?alt=media&token=e1510362-b04b-4cea-9792-b8a66d122bbd"/>
            //     </div>
            //     <div className = "MyShopdes">
            //         <div className = "MyShopH">
            //             <img src = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fpencil.png?alt=media&token=a361e115-5510-4c38-a8bd-9a8056401084"/>
            //             <p>รายละเอียดร้านค้า</p>
            //         </div>
            //         <p style = {{marginLeft:"1%"}}>ขายเนื้อวัวเกรดดี นำเข้าจากญี่ปุ่น ราคาถูก **ช่วงนี้โปรโมชั่นเปิดร้านใหม่ซื้อ 5 แถม 1 ไปเลยจ้า สั่งซื้อกันเยอะๆน้าา ** ส่งของทุกวัน จ-ศ ตัดออเดอร์ททุก 4 ทุ่ม ถ้าชอบอย่าลืมให้ดาวแม่ค้าเยอะๆ แล้วก็อย่าลืมรีวิวให้หน่อยนะคะ</p>
            //     </div>
            // </div>
            // </body>
            <MyShopField
                nameShop = "ออมสินขายเนื้อ"
                nameFood = "ออมสินขายเนื้อ"
                nameIcon = "pencil"
                des = "ขายเนื้อวัวเกรดดี นำเข้าจากญี่ปุ่น ราคาถูก **ช่วงนี้โปรโมชั่นเปิดร้านใหม่ซื้อ 5 แถม 1 ไปเลยจ้า สั่งซื้อกันเยอะๆน้าา ** ส่งของทุกวัน จ-ศ ตัดออเดอร์ททุก 4 ทุ่ม ถ้าชอบอย่าลืมให้ดาวแม่ค้าเยอะๆ แล้วก็อย่าลืมรีวิวให้หน่อยนะคะ"
            ></MyShopField>
        )
    }
}
export default MyShop