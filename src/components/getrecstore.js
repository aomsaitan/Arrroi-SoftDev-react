import React, {Component} from "react";
import firebase from "../database/firebase";

class getrecstore extends Component {
	constructor() {
		super();
		this.state = {
			store: "",
		};
	}

	componentDidMount = async () => {
		await this.importdata();
	};

	importdata = async () => {
		let tmp = [];
		let db = firebase.firestore();
		await db
			.collection("store")
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					//console.log(documentsnapshot.data());
					tmp.push(documentsnapshot.data());
				});
				this.setState({
					store: tmp,
				});
			})
			.catch(function (error) {
				console.log("Error", error);
			});
	};

	render() {
		if (this.state.store !== "") {
			return (
				<div>
					{this.state.store[0].name}
					<br></br>
					{this.state.store[1].name}
					<br></br>
					{this.state.store[2].name}
					<br></br>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default getrecstore;
