// ? in html we a tag but in react we can link 

// ? Link --->it is a component,it equal to anchor tag of html

import React from "react"
import {NavLink} from "react-router-dom"
import { IoMdHome } from "react-icons/io";
import { FaUsersViewfinder } from "react-icons/fa6";



const NavBar = ()=>{
    return(
        <>
            <nav>
                <aside className="logo">
                <span id="l1">Emp</span>
                <span id="l2">HUB</span>
                
                </aside>
                <aside className="naviLink">
                    <ul>
                        <NavLink to="/" >
                            <li>
                                <span className="icon"><IoMdHome /></span>
                                <span className="iconName" >HOME</span>
                                
                            </li>
                        </NavLink>
                        <NavLink to="/viewall">
                            <li>
                                <span className="icon"><FaUsersViewfinder /></span>
                                <span className="iconName" >VIEWALL</span>
                                

                            </li>
                        </NavLink>
                    </ul>
                </aside>
            </nav>
        </>
    )
}

export default NavBar