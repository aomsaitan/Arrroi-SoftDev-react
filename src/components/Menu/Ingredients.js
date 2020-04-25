import React, { Component } from "react";

class Ingredients extends Component {
    render() {
        return (
            <div className="row-flex" style={{ marginTop: "1vw" }}>
                <div style={{ width: "140%", marginLeft: "3vw" }}>
                    {this.props.Ingredients}
						</div>
                <div style={{ width: "60%" }}>{this.props.quantity}</div>
            </div>
        )
    }
}
export default Ingredients
