import React, { Component } from 'react'
import GetImage from '../GetImage'

class MyShopField extends Component {
    render() {
        return (
            <body className = "textS">
            <h1 align="center">{this.props.nameShop}</h1>
            <div className = "MyShop row-flex">
                <div className = "shopcover"><img id = {this.props.nameFood} alt = "รูปร้านค้า"/></div>
                <div className = "MyShopdes">
                    <div className = "MyShopH">
                        <img id = {this.props.nameIcon} alt = "pencil"/>
                        <p>รายละเอียดร้านค้า</p>
                    </div>
                    <p style = {{marginLeft:"1%"}}>{this.props.des}</p>
                </div>
            </div>
            </body>
            

        )
    }
}
export default GetImage(MyShopField)