import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    //NavLink for Navbar
    const NavbarLink = () => {
        return (
            <div className="flex flex-col lg:flex-row">
                <li className="text-[17px]">
                    <NavLink
                        to={`/`}
                        className={({ isActive, isPending }) =>
                            isActive ? "underline text-blue-600 font-semibold" : isPending ? "pending" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="text-[17px]">
                    <NavLink
                        to={'/aboutUs'}
                        className={({ isActive, isPending }) =>
                            isActive ? "underline text-blue-600 font-semibold" : isPending ? "pending" : ""
                        }
                    >
                        About US
                    </NavLink>
                </li>
                <li className="text-[17px]">
                    <NavLink
                        to={'/team'}
                        className={({ isActive, isPending }) =>
                            isActive ? "underline text-blue-600 font-semibold" : isPending ? "pending" : ""
                        }
                    >
                        Our Team
                    </NavLink>
                </li>
                <li className="text-[17px]">
                    <NavLink
                        to={'/album'}
                        className={({ isActive, isPending }) =>
                            isActive ? "underline text-blue-600 font-semibold" : isPending ? "pending" : ""
                        }
                    >
                        Album
                    </NavLink>
                </li>
                <li className="text-[17px]">
                    <NavLink
                        to={'/contactUS'}
                        className={({ isActive, isPending }) =>
                            isActive ? "underline text-blue-600 font-semibold" : isPending ? "pending" : ""
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </div>
        )
    }
    return (
        <div className="absolute z-50 w-full "> 
            <div className="  lg:mx-10">
                <div className="navbar lg:text-white text-black ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    <NavbarLink></NavbarLink>
                                }
                            </ul>
                        </div>
                        <div>
                            <img className="w-36" src="https://i.ibb.co/0fyR19G/elisian-removebg-preview.png" alt="Logo OF Elysian" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                <NavbarLink></NavbarLink>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* User Dropdown */}
                        <div className="dropdown dropdown-bottom hidden">
                            <label tabIndex={0} className=" m-1"><img className="w-10" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt="" /></label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><p>User</p></li>
                                <li><p>User email</p></li>
                                <li><button>Sign Out</button></li>
                            </ul>
                        </div>
                        <div className=" ">
                            <Link className="btn btn-primary">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;