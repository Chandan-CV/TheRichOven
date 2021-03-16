import React from 'react'
import '../Components/Header.css'
import logo from '../assets/logo.svg'
import SearchBar from '../Components/SearchBar'
import cart from "../assets/cart.svg"
function Header() {
    return (
        <div>
        <div className="header">
               
        <img
            src={logo}
            className="logo"
            />
            <div className="midHeader">
            <p className="text">Home</p>
            <p className="text">About</p>
            <p className="text">Contact us</p>
            <div className="search">
            <SearchBar/>
            </div>
            </div>
            <div className="rightHeader">
            <p className="text">Login/Sign up</p>
            <img
            src={cart}
            />  
            </div>
        </div>
        <div className="bottomHeader">
        <p className="textBottom">Celebration Cakes</p>
        <p className="textBottom">Cakes</p>
        <p className="textBottom">Cookies</p>
        <p className="textBottom">Muffins</p>
        <p className="textBottom">Bread</p>
        <p className="textBottom">Cupcakes</p>
        <p className="textBottom">Theme Cakes</p>
        </div>
        </div>
    )
}

export default Header
