
import React from 'react';
import Organization from './SideMenu/Organization';
import Doner from './SideMenu/Doner';
import Admin from './SideMenu/Admin';
import { Link } from 'react-router';
import { Outlet } from "react-router-dom";





const Dashboard = () => {

    return (
        <>
            <div className="w-screen text-gray-50 bg-gray-50 ">
                {/* Sidebar */}


                {/* Main Content */}
                <main className="  space-x-7 flex p-10  ">

                  <Organization/>
                  <Doner/>
                  <Admin/>



                </main>
            </div>
        </>
    );
}



export default Dashboard;



