import { useContext } from "react";
import { UserContext } from "./AuthContext";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
     const { logo }= useContext(UserContext)
     const links = 
     <div className=" flex flex-col lg:flex-row gap-4 text-base font-semibold">
               <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/login'}>Sign In</NavLink>
                <NavLink to={'/registration'}>Sign Up</NavLink>
                </div>
     
     return (     
          <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <img className="w-20 h-16 hidden lg:block" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
               <Link to={'/login'}><button className="btn">Login</button></Link>
            
          </div>
        </div>
     
          );
};

export default Nav;