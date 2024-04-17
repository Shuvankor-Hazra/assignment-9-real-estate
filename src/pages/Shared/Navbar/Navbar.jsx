import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
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
        <div className="navbar py-6 md:py-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="p-3 dropdown-content mt-3 z-[10] shadow bg-white border border-[#fda40b] rounded-box w-60">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl lg:text-4xl font-bold gap-0 p-0 hover:bg-white"><span className="text-[#fda40b] text-2xl lg:text-4xl font-extrabold">Bricks</span>valley</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 px-1 text-xl font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName || 'Name not found'}>
                        <div className="w-10 md:w-12 rounded-full ">
                            <img alt="Profile" src={user?.photoURL || userDefaultPic} />
                        </div>
                    </div>
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