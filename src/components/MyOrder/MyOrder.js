import React, { Component } from 'react'
import './MyOrder.css'
import MyOrderField1 from './MyOrderField1'
import MyOrderField2 from './MyOrderField2'

class MyOrder extends Component{
    render(){
        return(
            <body>
                <h1 แ>พิมพิดาค้าขาย</h1>
                <div class = "MyOrder textS">การขายของฉัน</div>
                <MyOrderField1
                Name1 = "ซอฟเดฟ"
                Address1 = "ECC"
                ></MyOrderField1>
                <MyOrderField2
                Name2 = "มีโฮ"
                Address2 = ""
                ></MyOrderField2>
                <MyOrderField1
                Name1 = "ซอฟเดฟ"
                Address1 = "ECC"
                ></MyOrderField1>
            </body>
        )
    }
}
export default MyOrder