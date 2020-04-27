import React, { Component } from 'react'

class MyOrderField1 extends Component {
    render() {
        const count = 1;
        return (
        
            <div class="MyOrderField1 textS" >
                <p>ชื่อ  : {this.props.Name1}</p>
                <p>ที่อยู่ : {this.props.Address1}</p>
            </div>
            
            
        )
    }
}
export default MyOrderField1