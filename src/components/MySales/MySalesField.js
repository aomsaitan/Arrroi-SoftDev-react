import React, { Component } from 'react'

class MySalesField extends Component {
    render() {
        const user = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fuser.png?alt=media&token=de378193-a0b6-4e31-b0b2-b77ecf0be82e"
        const phone = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fphone.png?alt=media&token=b0687bc0-0085-444d-9d9f-054e50874eb5"
        const email = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fenvelope.png?alt=media&token=5cedf9aa-ac86-4c4c-a197-b69b0f3ced50"
        const address = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fplaceholder.png?alt=media&token=6461820f-1e61-4ec9-bf1d-b5fed7d94467"
        return (
            <div class="MySalesField textS"
                style={
                    this.props.color === "1"
                        ? { backgroundColor: "#814A2C" }
                        : { backgroundColor: "#4A362B" }
                }>
                <div class="column-flex" style = {{width:"82%",marginTop:"0.5%",marginBottom:"1%",marginLeft:"2%"}}>
                    <div class="row-flex" style = {{marginTop:"1%"}}>
                        <img src={user} alt="user" />
                        <p>ชื่อ - นามสกุล {this.props.name}</p>
                    </div>
                    <div class="row-flex" style = {{marginTop:"1%"}}>
                        <img src={phone} alt="phone" />
                        <p>เบอร์โทร {this.props.phone}</p>
                    </div>
                    <div class="row-flex" style = {{marginTop:"1%"}}>
                        <img src={email} alt="email" />
                        <p>อีเมล {this.props.email}</p>
                    </div>
                    <div class="row-flex" style = {{marginTop:"1%"}}>
                        <img src={address} alt="address" />
                        <p>ที่อยู่ {this.props.address}</p>
                    </div>
                </div>
                <div className = "TimeAndDate">
                    <p >{this.props.time} {this.props.date}</p>
                </div>
            </div>


        )
    }
}
export default MySalesField