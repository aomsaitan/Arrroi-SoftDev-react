import React, { Component } from 'react'
import './Notification.css'
import NotificationField from './NotificationField'

class Notification extends Component {
    render() {
        return (
            <body class="textS">                 
                <h1 > Notification </h1>
                <div>
                <NotificationField
                    nameIcon="box"
                    HeadNoti="ได้รับสินค้าแล้วหรือยัง"
                    des="กรุณาตรวจสอบ Order #292706378684051 ให้ดีก่อนกดรับสินค้า เราขอเรียนให้ทราบว่าคุณจะไม่สามารถยื่นคำขอคืนเงินหรือคืนสินค้าได้หลังจากคุณกด ฉันได้ตรวจสอบและยอมรับสินค้า"
                ></NotificationField>
                <NotificationField
                    nameIcon="box"
                    HeadNoti="ร้านออมสินขายเนื้อ ได้เพิ่มสินค้าเพิ่มแล้ว"
                    des="สามารถไปดูสินค้าได้ที่ ร้านออมสินขายเนื้อ"
                ></NotificationField>
                <NotificationField
                    nameIcon="box"
                    HeadNoti="ขณะนี้พริกไทยป่น กำลังเป็นที่นิยม Hot!"                    
                ></NotificationField>
                <NotificationField
                    nameIcon="box"
                    HeadNoti="พัสดุของท่านถูกจัดส่งเรียบร้อยแล้ว"
                    des="Order #292706378684051 Tracking # LEXPU029069964"
                ></NotificationField>
                </div>
            </body>
        )
    }
}
export default Notification