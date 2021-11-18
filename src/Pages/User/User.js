import React from 'react'
import './User.css'
import {PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationSearching,Publish} from '@mui/icons-material';
import {Link} from "react-router-dom"

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
           
            </div>
            <div className="userContainer">
            <div className="userShow">
            <div className="userShowTop">
            <img src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_960_720.png" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
            <span className="userShowUsername">John cena</span>
            <span className="userShowUserTitle">Software developer</span>
            </div>
            </div>
            <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className="userShowIcon"/>
            <span className="userShowInfoTitle">JohnCena16</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className="userShowIcon"/>
            <span className="userShowInfoTitle">10.10.1975</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon"/>
            <span className="userShowInfoTitle">9855459518</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className="userShowIcon"/>
            <span className="userShowInfoTitle">johncena@gmai.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className="userShowIcon"/>
            <span className="userShowInfoTitle">New York, USA</span>
            </div>
       
            </div>
            </div>
            <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
          <div className="userUpdateLeft">
          <div className="userUpdatItem">
          <label>Username</label>
          <input type="text"  placeholder="enter your name" className="userUpdateInput"/>
          </div>
          <div className="userUpdatItem">
          <label>Fullname</label>
          <input type="text"  placeholder="enter your fullname" className="userUpdateInput"/>
          </div>
          <div className="userUpdatItem">
          <label>Email</label>
          <input type="email"  placeholder="enter your email" className="userUpdateInput"/>
          </div>
          <div className="userUpdatItem">
          <label>Phone</label>
          <input type="number"  placeholder="enter your mobile no." className="userUpdateInput"/>
          </div>
          <div className="userUpdatItem">
          <label>Address</label>
          <input type="text"  placeholder="enter your address" className="userUpdateInput"/>
          </div>
        
          </div>
          <div className="userUpdateRight">
          <div className="userUpdateUpdload">
          <img className="userUpdateImg" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_960_720.png" alt="" />
         <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
          <input type="file" id="file" style={{display:"none"}} />
          </div>
              <button className="userUpdateButton">Update</button>   
          </div>
          </form>
          </div>
        </div>
        </div>
    )
}

export default User
