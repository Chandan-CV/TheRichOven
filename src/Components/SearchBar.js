import { Input, InputAdornment } from '@material-ui/core'
import React from 'react'
import "./Searchbar.css"
import searchIcon from "../assets/searchIcon.svg"
function SearchBar() {
    return (
        <div className="outer">
        <img 
        src={searchIcon}
        />   
        
        <input className="main" 
            placeholder="Search"
            >
            
            </input>
           
        </div>
    )
}

export default SearchBar
