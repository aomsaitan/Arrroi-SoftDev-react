import React, { Component } from "react";
import GetImage from '../GetImage';
class ShopField extends Component {
    render() {
        return (
            <div class="shop" >
                <a>
                    <div class="box textS"> {this.props.nameShop}</div>
                    <div class="cover"><img id={this.props.nameFood} alt={this.props.nameFood} /></div>
                </a>
                <div class="des textS">
                    <p>{this.props.des}</p>
                    {this.props.star === 5
                        ? <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        : this.props.star === 4
                            ? <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                            : this.props.star === 3
                                ? <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
                                : this.props.star === 2
                                    ? <span>&#9733;&#9733;&#9734;&#9734;&#9734;</span>
                                    : this.props.star === 1
                                        ? <span>&#9733;&#9734;&#9734;&#9734;&#9734;</span>
                                        : <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>}
                    <p class="county">{this.props.county}</p>
                </div>
            </div>


        )
    }

}
export default GetImage(ShopField);