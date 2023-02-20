import React from "react";
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    const Age =() =>{
        return <h4>Age is 23 year old</h4>
    }
    return (
        <>
             {/* <a style={{ marginLeft: '.1rem' }} href="/"> About  </a>  */}
             {/* <a style={{ marginLeft: '.6rem' }} href="/contact"> Contact  </a> */}
             <br />

          <div className="menu_style"> 
            <NavLink exact to='/' activeClassName='active_class'> About </NavLink>
            <NavLink exact to='/contact'  activeClassName='active_class' > Contact</NavLink>
            <NavLink exact to='/search'  activeClassName='active_class' > Search</NavLink>
            <NavLink to='/contact/name'  activeClassName='active_class' style={{ marginLeft: '.6rem' }}> Servies</NavLink>
            <NavLink to='/user/Rana/'  activeClassName='active_class' style={{ marginLeft: '.6rem' }}> User</NavLink>
          </div>
        </>
    );
};
export default Navbar;