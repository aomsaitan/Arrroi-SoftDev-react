import React, { Component } from 'react'
import './MySales.css'
import OrderDetailField from '../OrderDetail/OrderDetailField'


class MySalesDetail extends Component{
    render(){
        return(
            <body class = "textS">
                <h1>ชื่อของผู้สั่งซื้อสินค้า</h1>
                <div class = "MySales ">การขายของฉัน</div>
                <div style={{marginTop:"1%",marginBottom:"1%"}}>
                    <OrderDetailField
                        nameFood="เนื้อสันในวัว"
                        size="500 กรัม"
                        price="200 บาท"
                        quantity="1"
                    ></OrderDetailField>
                    <OrderDetailField
                        nameFood="ซอสหอยนางรมตราแม็กกี้"
                        size="740 มล."
                        price="35 บาท"
                        quantity="1"
                    ></OrderDetailField>
                    <OrderDetailField
                        nameFood="ซอสปรุงอาหารตราแม็กกี้"
                        size="680 มล."
                        price="35 บาท"
                        quantity="1"
                    ></OrderDetailField>
                    <OrderDetailField
                        nameFood="หอมหัวใหญ่"
                        size="1 กก."
                        price="35 บาท"
                        quantity="1"
                    ></OrderDetailField>
                    <OrderDetailField
                        nameFood="ต้นกระเทียม"
                        size="ถุงใหญ่ 500 กรัม"
                        price="100 บาท"
                        quantity="1"
                    ></OrderDetailField>
                </div>
                <button className="MySales textS">
                    ฉันได้ตรวจสอบและส่งสินค้าแล้ว
				</button>
            </body>

        )
    }

}
export default MySalesDetail;