import React from 'react'
import "./Footer.css"
import twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import insta from '../assets/instagram.svg'

function Footer() {
    return (
        <div className="Footer">
  
        <div className="scDiv">
        <p className="SC">Stay Connected</p>
        <div>
        <img
        className="connectLogo"
        src={twitter}
        />
        <img
        className="connectLogo"
        src={LinkedIn}
        />
        <img
        className="connectLogo"
        src={insta}
        />
        
        </div>
        </div>
        </div>
    )
}

export default Footer
