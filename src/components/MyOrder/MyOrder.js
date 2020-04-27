import React, { Component } from 'react'
import './MyOrder.css'
import MyOrderField from './MyOrderField'

class MyOrder extends Component{
    render(){
        const i = 0;
        return(            
            <body>
                <h1 class = "textS" >พิมพิดาค้าขาย</h1>
                <div class = "MyOrder textS">การขายของฉัน</div>
                <MyOrderField               
                name = "พิมพิดา มุสิกมาส"
                phone = "0899999999"
                email = "610104513@kmitl.ac.th"
                address = "ซอย 1 ฉลองกรุง1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520"
                order = "#3215321532154"
                date = "27/4/2020"
                ></MyOrderField>
                <MyOrderField               
                name = "สายธาร กิตติบัลลังก์กุล"
                phone = "0969043542"
                email = "61011104@kmitl.ac.th"
                address = "70/213 ถนนร่มเกล้า2 แขวงมีนบุรี เขตมีบุรี กรุงเทพมหานคร 10520"
                order = "#3321213211254"
                date = "28/4/2020"
                ></MyOrderField>
                
            </body>
        )
    }
}
export default MyOrder