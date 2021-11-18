import React from 'react'
import './NewUser.css'

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUSerTitle">New User</h1>
<form className="newUserForm">
<div className="newUserItem">
<label>Username</label>
<input type="text" placeholder="enter your username" />
</div>
<div className="newUserItem">
<label>Fullname</label>
<input type="text" placeholder="enter your fullname" />
</div>
<div className="newUserItem">
<label>Email</label>
<input type="email" placeholder="enter your email" />
</div>
<div className="newUserItem">
<label>Password</label>
<input type="password" placeholder="enter your password" />
</div>
<div className="newUserItem">
<label>Phone</label>
<input type="number" placeholder="enter your mobile no." />
</div>
<div className="newUserItem">
<label>Address</label>
<input type="text" placeholder="enter your address" />
</div>
<div className="newUserItem">

<label>Gender</label>
<div className="newUserGender">
<input type="radio" name="gender" id="male" value="male" />
<label htmlFor="male">Male</label>
<input type="radio" name="gender" id="female" value="female" />
<label htmlFor="female">Female</label>
<input type="radio" name="gender" id="others" value="others" />
<label htmlFor="others">Others</label>
</div>
</div>
<div className="newUserItem">
<label htmlFor="">Active</label>
<select name="active" id="active" className="newUserSelect">
<option value="yes">yes</option>
<option value="no">No</option>
</select>

</div>
 

</form>
<button className="newUserButton">Create</button>
        </div>
    )
}

export default NewUser
