import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSIgnOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="p-2 rounded-lg "><NavLink to="/">Home</NavLink></li>
        <li className="p-2 rounded-lg "><NavLink to="/about">About</NavLink></li>
        <li className="p-2 rounded-lg "><NavLink to="/updateProfile">Update Profile</NavLink></li>
    </>

    return (
        <div className="navbar py-10 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-300 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-4xl font-bold gap-0"><span className="text-[#fda40b] text-2xl lg:text-4xl font-extrabold">Bricks</span>valley</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 px-1 text-xl font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 md:w-10 rounded-full">
                            <img alt="Profile" src={userDefaultPic} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                {
                    user ?
                        <Link onClick={handleSIgnOut} className="btn btn-sm md:btn-md bg-[#fda40b] text-white md:px-10 md:text-lg md:font-bold">Log Out</Link> :
                        <Link to="/login" className="btn btn-sm md:btn-md bg-[#fda40b] text-white md:px-10 md:text-lg md:font-bold">Log In</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;