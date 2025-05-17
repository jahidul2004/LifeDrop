
import React from 'react';
import Organization from './SideMenu/Organization';
import Doner from './SideMenu/Doner';
import Admin from './SideMenu/Admin';
import { Navigate, useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const hello = () => {
        console.log("Hello tanveer")

    };
    return (
        <>
            <div className="min-h-screen text-gray-50 bg-gray-50 flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md p-4">
                    <div className="text-2xl font-bold text-[#f64245] mb-2 ml-3">Dashboard </div>
                    <div className=' border text-[#f64245] mb-8' ></div>


                    <nav className="space-y-3">

                        <button onClick={()=>{Navigate('/organization')}} className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]" >
                            <span>🏢</span>
                            <span>Organization</span>
                        </button>

                        <button className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]">
                            <span>🤝</span>
                            <span>Donors</span>
                        </button>

                        <button className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]">
                            <span>⚙️</span>
                            <span>Admin</span>
                        </button>

                    </nav>

                </aside>

                {/* Main Content */}
                <main className="flex-1 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Admin />
                        <Organization />
                        <Doner />
                    </div>




                </main>
            </div>
        </>
    );
}



export default Dashboard;



