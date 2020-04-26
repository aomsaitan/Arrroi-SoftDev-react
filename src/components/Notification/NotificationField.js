import React, { Component } from 'react'
import GetImage from '../GetImage'

class NotificationField extends Component {
    render() {
        return (
            <div className="Notification">
                <img id={this.props.id} alt={this.props.nameIcon} />
                <div>
                <h2> {this.props.HeadNoti}</h2>
                <p>{this.props.des}</p>
                </div>
            </div>
        )
    }
}
export default GetImage(NotificationField)