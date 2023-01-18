import React from 'react'
import SidebarAdmin from './SidebarAdmin';
import ProfileComponent from '../ProfileComponent';
import { Outlet } from 'react-router-dom';

export const AdminDashboard = () => {



  return (
    <div className='bootstrap-wrapper'>

      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2">
          <SidebarAdmin />
          </div>

          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;
