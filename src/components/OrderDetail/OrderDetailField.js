import React, { Component } from 'react'
import GetImage from '../GetImage'

class OrderDetailField extends Component {
    render() {
        return (
            <div className="OrderList">
                <div className="cover"><img id={this.props.nameFood} alt={this.props.nameFood} /></div>
                <div className = "box"><p>{this.props.nameFood}</p></div>
                <div className = "box"><p>{this.props.size}</p></div > {/*ปริมาณที่แบ่งขาย*/}
                <div className = "box"><p>ราคา : {this.props.price}</p></div> {/*ราคา*/}
                <div className = "box"><p>จำนวน : {this.props.quantity}</p></div>
            </div>
        )
    }
}
export default GetImage(OrderDetailField)