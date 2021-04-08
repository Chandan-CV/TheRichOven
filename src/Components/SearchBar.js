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
        
        <Input className="main" 
            placeholder="Search"
            >
            </Input>
           
        </div>
    )
}

export default SearchBar
