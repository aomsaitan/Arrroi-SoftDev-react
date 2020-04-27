import React, { Component } from 'react'

class MyOrderField2 extends Component {
    render() {
        return (           
            <div class="MyOrderField2 textS" >
                <p>ชื่อ  : {this.props.Name2}</p>
                <p>ที่อยู่ : {this.props.Address2}</p>
            </div>            
        )
    }
}
export default MyOrderField2