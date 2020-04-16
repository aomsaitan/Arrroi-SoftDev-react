import React, { Component } from "react";
import GetImage from '../GetImage';

class MenuField extends Component {
    render() {
        return (
            <div class="desOutbox">
                <img id={this.props.nameIcon} alt={this.props.nameIcon} />
                <p>{this.props.des}</p>
            </div>
        )
    }
}
export default GetImage(MenuField);