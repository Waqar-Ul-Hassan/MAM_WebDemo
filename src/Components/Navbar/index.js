import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>Milton Masjid</h1>
            {/* <img src={require('../../images/MAM_logo.png')} alt="logo" /> */}
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/events" activeStyle>
                Events
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
                Contact Us
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar