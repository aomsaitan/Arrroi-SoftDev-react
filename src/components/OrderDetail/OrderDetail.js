import React, { Component } from 'react'
import MySalesField from '../MySales/MySalesField'
import './OrderDetail.css'
import OrderDetailField from './OrderDetailField'
import PaymentField from './PaymentField'

class OrderDetail extends Component {
    render() {
        return (
            <body className="textS">
                <h1  >รายละเอียดคำสั่งซื้อ</h1>
                <p style={{ marginLeft: "18%", fontSize: "2.5vw" }}>ข้อมูล</p>
                <MySalesField
                    color="2"
                    name="พิมพิดา มุสิกมาส"
                    phone="0899999999"
                    email="610104513@kmitl.ac.th"
                    address="ซอย 1 ฉลองกรุง1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520"
                    order="#3215321532154"
                // date = "27/4/2020"
                // time = "2:54 AM"
                ></MySalesField>
                <p style={{ marginLeft: "18%", fontSize: "2.5vw", marginBottom: "1%" }}>รายการสินค้าที่สั่งซื้อ</p>
                <div >
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
                <div
                    style={{
                        fontSize: "2vw",
                        marginLeft: "18%",
                        marginBottom: "1vw",
                        marginTop: "2%"
                    }}
                >
                    สรุปรายการสั่งซื้อ
				</div>
                <div style={{ fontSize: "1.5vw", marginLeft: "35%" }}>
                    <div className="row-flex" style={{ marginBottom: "0.75vw" }}>
                        <div style={{ width: "30%" }}>ยอดรวม</div>
                        <div style={{ textAlign: "right", width: "15%" }}>
                            {/* {this.state.totalPrice}&nbsp;บาท */}
                            400&nbsp; บาท
						</div>
                    </div>
                    <div className="row-flex" style={{ marginBottom: "0.75vw" }}>
                        <div style={{ width: "30%" }}>ค่าจัดส่ง</div>
                        <div style={{ textAlign: "right", width: "15%" }}>
                            50&nbsp;บาท
						</div>
                    </div>
                    <div className="row-flex" style={{ marginBottom: "0.75vw" }}>
                        <div style={{ width: "30%", color: "red" }}>ยอดรวมทั้งสิ้น</div>
                        <div style={{ textAlign: "right", width: "15%", color: "red" }}>
                            {/* {this.state.totalPrice + 50}&nbsp;บาท */}
                            450&nbsp;บาท
						</div>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: "2vw",
                        marginLeft: "18%",
                        marginBottom: "1vw",
                        marginTop: "2%"
                    }}
                >
                    กรุณาเลือกวิธีชำระเงิน
				</div>
                <div className="payment">
                    <PaymentField                    
                        nameIcon = "ไทยพาณิชย์"
                        bank = "ธนาคารไทยพาณิชย์"                       
                    ></PaymentField>
                    <PaymentField
                        nameIcon = "ธนาคารกรุงเทพ"
                        bank = "ธนาคารกรุงเทพ"
                    ></PaymentField>
                    <PaymentField
                        nameIcon = "กสิกร"
                        bank = "ธนาคารกสิกร"
                    ></PaymentField>
                </div>
                <div className="payment">
                <PaymentField
                        nameIcon = "กรุงไทย"
                        bank = "ธนาคารกรุงไทย"
                    ></PaymentField>
                   <PaymentField
                        nameIcon = "truemoneywallet"
                        bank = "True money wallet"
                    ></PaymentField>
                    <PaymentField
                        nameIcon = "money"
                        bank = "ชำระเงินปลายทาง"
                    ></PaymentField>

                </div>
                <button
                    className="textS Order"
                    style={{ position: "relative", left: "70vw" }}
                >
                    สั่งสินค้า
				</button>

            </body >
        )
    }
}
export default OrderDetail