import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../pages/dashboard/Sidebar';
import Organization from '../pages/dashboard/SideMenu/Organization';
import Doner from '../pages/dashboard/SideMenu/Doner';
import Admin from '../pages/dashboard/SideMenu/Admin';

const DashLayout = () => {
  return (
    <div className='flex'>

      <Sidebar/>
      <Outlet/>

    </div>
  )
}

export default DashLayout ;
