import React, { Component } from 'react'
import GetImage from '../GetImage'

class PaymentField extends Component {
    render() {
        return (
            <label class="container">
                <input type="radio" name="radio"></input>
                <span class="checkmark row-flex"><img id = {this.props.nameIcon} alt = {this.props.nameIcon} />
                    <p>{this.props.bank}</p></span>
            </label>

        )
    }
}
export default GetImage(PaymentField)