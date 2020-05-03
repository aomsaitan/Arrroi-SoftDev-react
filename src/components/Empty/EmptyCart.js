import React, {Component} from "react";
import Image from "../Image";
import './Empty.css'
class EmptyCart extends Component {
	render() {
		return (
			<div className="emptyCart">
				<Image
					className="BGEmptyCart"
					nameFood="superMarket"
					alt="superMarket"
				/>
				<div className="textS letShop" align="center">
					<Image
						className="aloneCart"
						nameIcon="aloneCart"
						alt="aloneCart"
					/>
					<p className="letShopT">เหงาจัง ไม่มีสินค้าในรถเข็นเลยTT</p>
					<p >เลือกสินค้าโดนใจใส่รถเข็นไว้เลย</p>
					<button className="textS letShopB">ช้อปตอนนี้</button>
				</div>
			</div>
		);
	}
}
export default EmptyCart;
