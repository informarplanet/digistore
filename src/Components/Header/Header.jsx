import { NavLink } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

// const [user, setUser]=useState();


export default function Header (){

    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/fav'><FaHeart /></NavLink>
            <NavLink to='/cart'><HiMiniShoppingBag /></NavLink>
            {/* {
                user?  */}
                <NavLink to='/singin'> <button type="button" >Singup</button> </NavLink>
                <NavLink to='/singup'> <button type="button">Sing In</button> </NavLink>
            {/* } */}
            
        </div>
    )
}