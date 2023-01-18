import { Card, CardContent, CardActions } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import LoginService from '../Services/LoginService';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ProfileComponent = () => {

  let user = null;

  user = LoginService.getUser();

  return (

    <Card >

      <h2 className=''>&nbsp; Profile Details <VisibilityRoundedIcon /></h2>

      <CardContent>
        <div className="bootstrap-wrapper">
          <div className="container">

            <div className="container text-center">
              <img src='../Images/default.png' alt="User" class="profile-image" />

              <h2 class="mt20">{`${user.firstname} ${user.lastname}`}</h2>

            </div>

            <div className="row">
              <div className="col-md-10 offset-md-1">

                {/* details table */}
                <table className='table text-center'>

                  <tr >
                    <td >Username</td>
                    <td >{user.username}</td>
                  </tr>
                  <tr >
                    <td >UserId</td>
                    <td >EXAM{user.id}</td>
                  </tr>
                  <tr>
                    <td >Phone</td>
                    <td >{user.phone}</td>
                  </tr>
                  <tr >
                    <td >Role</td>
                    <td >{user.authorities[0].authority}</td>
                  </tr>
                  <tr >
                    <td >Status</td>
                    <td >{user.enabled ? "ACTIVE" : "NOT ACTIVE"}</td>
                  </tr>
                </table>


              </div>
            </div>
          </div>
        </div>

      </CardContent>

      <CardActions class='text-center mb10'>
        <Button size="small" color="primary" variant='contained' endIcon={<EditRoundedIcon/>}>UPDATE </Button>
      </CardActions>

    </Card>

  )
}

export default ProfileComponent