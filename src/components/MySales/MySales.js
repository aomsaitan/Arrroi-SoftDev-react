import React, { Component } from 'react'
import './MySales.css'
import MySalesField from './MySalesField'

class MySales extends Component{
    render(){
        const i = 0;
        return(            
            <body>
                <h1 class = "textS" >พิมพิดาค้าขาย</h1>
                <div class = "MySales textS">การขายของฉัน</div>
                <div>
                <MySalesField
                color = "1"               
                name = "พิมพิดา มุสิกมาส"
                phone = "0899999999"
                email = "610104513@kmitl.ac.th"
                address = "ซอย 1 ฉลองกรุง1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520"
                order = "#3215321532154"
                date = "27/4/2020"
                time = "2:54 AM"
                ></MySalesField>
                <MySalesField      
                color = "2"          
                name = "สายธาร กิตติบัลลังก์กุล"
                phone = "0969043542"
                email = "61011104@kmitl.ac.th"
                address = "70/213 ถนนร่มเกล้า2 แขวงมีนบุรี เขตมีบุรี กรุงเทพมหานคร 10520"
                order = "#3321213211254"
                date = "28/4/2020"
                time = "2:54 AM"
                ></MySalesField>
                </div>
            </body>
        )
    }
}
export default MySales