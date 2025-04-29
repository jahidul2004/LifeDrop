import { BsDropletFill, BsPeople } from "react-icons/bs";
import { IoCreateOutline, IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineBloodtype } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
    const links = (
        <>
            <li>
                <Link>
                    <RiHome9Line />
                    Home
                </Link>
            </li>
            <li>
                <Link>
                    <BsPeople />
                    About Us
                </Link>
            </li>
            <li>
                <Link>
                    <IoSearchCircleOutline />
                    Find Blood
                </Link>
            </li>
            <li>
                <Link>
                    <IoCreateOutline />
                    Register
                </Link>
            </li>
        </>
    );
    return (
        <div className="sticky top-0 bg-white z-50">
            <div className="w-[95%] md:container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-semibold flex items-center gap-2">
                        <BsDropletFill size={32} className="text-error" />
                        Life<span className="text-error">Drop</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-error">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-error btn-soft">
                        <MdOutlineBloodtype />
                        Join With Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
