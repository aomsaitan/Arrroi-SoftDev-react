import React, { Component } from "react";
import getImage from "./GetImage";
class Image extends Component {
    render() {
        console.log(this.props.nameFood)
        return (
            <img
                style={this.props.style}
                alt={this.props.alt}
                id={
                    this.props.nameIcon
                        ? this.props.nameIcon
                        : this.props.nameFood
                }
                src={this.props.url} //ถ้าจะเรียกผ่าน url ก็ใช้ตัวนี้เลย
                className={this.props.className}
                onClick={this.props.onClick}
            />
        );
    }
}

export default getImage(Image);
