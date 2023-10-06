import { useContext } from "react";
import { UserContext } from "./AuthContext";
import { NavLink } from "react-router-dom";

const Nav = () => {
     const { logo }= useContext(UserContext)
     return (
          <div className="flex justify-between px-5 mt-4 py-2 items-center shadow-md">
               <img className="w-20 h-16" src={logo} alt="" />
               <div className="flex gap-4 text-base font-semibold">
               <NavLink to={'/'}>Home</NavLink>
               <NavLink to={'/login'}>Sign In</NavLink>
               <NavLink to={'/registration'}>Sign Up</NavLink>
               </div>
               
          </div>
     );
};

export default Nav;