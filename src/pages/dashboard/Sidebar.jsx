import React from 'react'
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="min-h-screen text-gray-50 bg-gray-50 flex" >
            <aside className="w-64 bg-white shadow-md p-4">
                <div className="text-2xl font-bold text-[#f64245] mb-2 ml-3">
                    <Link><button > Dashboard </button></Link>
                </div>
                <div className=' border text-[#f64245] mb-8' ></div>


                <nav className="space-y-3">

                    <Link to="/dashboard/organization" className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]" >
                        <button>
                            <span>🏢</span>
                            <span>Organization</span>
                        </button>
                    </Link>

                    <Link to="/dashboard/doner" className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]">
                        <button >
                            <span>🤝</span>
                            <span>Donors</span>
                        </button>
                    </Link>

                    <Link to="/dashboard/admin" className="flex items-center font-semibold space-x-2 text-gray-700 hover:text-[#f64245]">
                        <button>
                            <span>⚙️</span>
                            <span>Admin</span>
                        </button>
                    </Link>


                </nav>

            </aside>

        </div>
    )
}

export default Sidebar
