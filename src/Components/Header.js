import React, { useContext, useState } from "react";
import "../Components/Header.css";
import logo from "../assets/logo.svg";
import SearchBar from "../Components/SearchBar";
import cart from "../assets/cart.svg";
import hamburger from "../assets/hamburger.svg";
import { Button, Drawer, List, ListItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { auth } from "../Fire";
import { Context } from "../App";

function Header() {
  const user = useContext(Context)
  const [open, setopen] = useState(false);
  const [buttonSelected, setButtonSelected] = useState();
  const   history = useHistory();
      const toggleDrawer = () => {
    if (open == true) {
      setopen(false);
    } else {
      setopen(true);
    }
  };
  const drawChoose = (selected) => {
    toggleDrawer();
    setButtonSelected(selected);
  };
  const list = [
    "Celebration Cakes",
    "Cakes",
    "Cookies",
    "Muffins",
    "Bread",
    "Cupcakes",
    "Theme Cakes",
    "Home",
    "Login/Sign up",
    "About",
    "Contact us",
  ];

  const lowList = [
    "Celebration Cakes",
    "Cakes",
    "Cookies",
    "Muffins",
    "Bread",
    "Cupcakes",
    "Theme Cakes",
  ];
  return (
    <div>
      <div className="header">
        <img src={logo} className="logo" onClick={()=>{history.push("/")}}/>
        <div className="mobileFriendly">
          <div className="upperMobileHeader">
           
          
              <img onClick={()=>{ toggleDrawer();}} src={hamburger} className="hamburger"/>
          
            <Drawer
              anchor="right"
              open={open}
              onClose={() => toggleDrawer()}
              onSelect={() => toggleDrawer()}
            >
              <List>
                {list.map((element) => {
                  return (
                    <div onClick={() => {drawChoose(element)}}>
                    <ListItem button>
                    {element}
                    </ListItem>
                    </div>
                  );
                })}
              </List>
            </Drawer>
            <img src={logo} className="logoM" />
            <img 
            src={cart}
            />
          </div>
            <SearchBar />
        </div>

        <div className="midHeader">
          <p className="text" onClick={()=>{history.push("/")}}>Home</p>
          <p className="text">About</p>
          <p className="text">Contact us</p>
          <div className="search">
            <SearchBar />
          </div>
        </div>
        <div className="rightHeader">
         {user?<p className="text" onClick={()=>{history.push("/myAccount")}}>My Account</p>:null}
        {user?<p onClick={()=>{auth.signOut().then(()=>{window.location.reload()})}} className="text">Logout</p> :<p onClick={()=>{history.push("/login")}} className="text">Login/Sign up</p>}
          <img src={cart} />
        </div>
      </div>
      <div className="bottomHeader">
        {lowList.map((category) => {
          return <p className="textBottom">{category}</p>;
        })}
      </div>
    </div>
  );
}

export default Header;
