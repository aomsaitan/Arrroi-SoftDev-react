import React, { Component } from 'react'
import './Menu.css';
import MenuField from './MenuField';
import HowTo from './Howto';

class Menu extends Component {
    render() {
        return (
            <body>
                <h1 class="textS">เนื้อผัดน้ำมันหอย</h1>

                <div class="menu textS">
                    <MenuField
                        nameIcon="networking"
                        des="สำหรับ 6 ที่"
                    ></MenuField>
                    <MenuField
                        nameIcon="pan"
                        des="ส่วนผสม"
                    ></MenuField>

                    <div class="desInbox">
                        <div class="desInboxL">
                            เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ<br></br>
                            ซอสหอยนางรม<br></br>
                            ซอสปรุงอาหารตราแม็กกี้ สูตรผัดกลมกล่อม<br></br>
                            หอมหัวใหญ่<br></br>
                            ต้นกระเทียมหั่นเป็นท่อน<br></br>
                            พริกชี้ฟ้าแดงหั่นแฉลบ<br></br>
                            ซีอิ๊วดำ<br></br>
                            กระเทียมสับหยาบ<br></br>
                            พริกไทยป่น<br></br>
                            น้ำตาลทราย<br></br>
                        </div>
                        <div class="desInboxR">
                            300 กรัม<br></br>
                            2 ช้อนชา<br></br>
                            1 ช้อนชา<br></br>
                            1 หัว (150 กรัม)<br></br>
                            5 ต้น (200 กรัม)<br></br>
                            3 เม็ด<br></br>
                            1 ช้อนชา<br></br>
                            1 ช้อนโต๊ะ<br></br>
                            1/2 ช้อนชา<br></br>
                            1/2 ช้อนชา<br></br>
                        </div>
                    </div>
                    <MenuField
                        nameIcon="mix"
                        des="วิธีทำ"
                    ></MenuField>
                    <HowTo
                        step = "Step 1"
                        des = "หมักเนื้อวัวโดยปรุงรสด้วยซอสหอยนางรม ซอสปรุงอาหาร ซีอิ๊วดำ พริกไทยป่นและน้ำตาลทราย คลุกเคล้าให้เข้ากัน พักไว้ในตู้เย็นประมาณ 30 นาที"                    
                    ></HowTo>
                    <HowTo
                        step = "Step 2"
                        des = "ใส่น้ำมันพืชลงในกระทะ ตั้งไฟปานกลางพอร้อน ใส่กระเทียม ผัดพอหอม ตามด้วยเนื้อวัวที่เตรียมไว้ ผัดด้วยไฟแรงให้เนื้อเกือบสุก ใส่หอมหัวใหญ่ น้ำเปล่า ผัดพอสุกจึงใส่ต้นกระเทียมและพริกชี้ฟ้าแดง ผัดอีกสักครู่ยกลง จัดรับประทานกับข้าวสวยขณะร้อน "
                    ></HowTo>
                </div>
            </body>
        )
    }
}
export default Menu         	                