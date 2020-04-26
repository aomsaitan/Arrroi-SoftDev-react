import React, { Component } from 'react'
import './Notification.css'
import NotificationField from './NotificationField'

class Notification extends Component {
    render() {
        return (
            <div className="textS">                 
                <h1 > Notification </h1>
                <div>
                <NotificationField
                    id="noti1"
                    nameIcon="box"
                    HeadNoti="ได้รับสินค้าแล้วหรือยัง"
                    des="กรุณาตรวจสอบ Order #292706378684051 ให้ดีก่อนกดรับสินค้า เราขอเรียนให้ทราบว่าคุณจะไม่สามารถยื่นคำขอคืนเงินหรือคืนสินค้าได้หลังจากคุณกด ฉันได้ตรวจสอบและยอมรับสินค้า"
                ></NotificationField>
                <NotificationField
                    id="noti2"
                    nameIcon="box"
                    HeadNoti="ร้านออมสินขายเนื้อ ได้เพิ่มสินค้าเพิ่มแล้ว"
                    des="สามารถไปดูสินค้าได้ที่ ร้านออมสินขายเนื้อ"
                ></NotificationField>
                <NotificationField
                    id="noti3"
                    nameIcon="box"
                    HeadNoti="ขณะนี้พริกไทยป่น กำลังเป็นที่นิยม Hot!"                    
                ></NotificationField>
                <NotificationField
                    id="noti4"
                    nameIcon="box"
                    HeadNoti="พัสดุของท่านถูกจัดส่งเรียบร้อยแล้ว"
                    des="Order #292706378684051 Tracking # LEXPU029069964"
                ></NotificationField>
                </div>
            </div>
        )
    }
}
export default Notification