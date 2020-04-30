import React, { Component } from 'react'
import GetImage from '../GetImage'

class NotificationField extends Component {
    render() {
        const Box = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fbox.png?alt=media&token=114fa1d2-a0e6-4b71-a636-810092bbdb9c"
        const bullhorn = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fbullhorn.png?alt=media&token=c3043585-2672-4013-9dc7-6856873cfcee"
        return (
            <div className="Notification">
                <img src={this.props.type === "Order"
                    ? Box
                    : bullhorn} alt={this.props.type} />
                <div>
                    <h2> {this.props.HeadNoti}</h2>
                    <p>{this.props.des}</p>
                    <p>{this.props.time} {this.props.date}</p>
                </div>
            </div>
        )
    }
}
export default GetImage(NotificationField)