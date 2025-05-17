import { BsDropletFill, BsPeople } from "react-icons/bs";
import { IoCreateOutline, IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineBloodtype } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
    const links = (
        <>
            <li>
                <Link to={"/"}>
                    <RiHome9Line />
                    Home
                </Link>
            </li>
            <li>
                <Link to={"/about"}>
                    <BsPeople />
                    About Us
                </Link>
            </li>
            <li>
                <Link to={"/find-blood"}>
                    <IoSearchCircleOutline />
                    Find Blood
                </Link>
            </li>
            <li>
                <Link to={"/registration"}>
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
                        <BsDropletFill size={32} className="text-[#f64245]" />
                        Life<span className="text-[#f64245]">Drop</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#f64245]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to={"/registration"}
                        className="btn btn-error btn-soft text-[#f64245]"
                    >
                        <MdOutlineBloodtype />
                        Join With Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
