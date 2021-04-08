import React, { useState, useEffect, useContext } from "react";
import "../HomeScreen/HomeScreen.css";
import Header from "../../Components/Header.js";
import ProductDisplay from "../../Components/ProductDisplay";
import { Button } from "@material-ui/core";
import Footer from "../../Components/Footer.js";
import { db } from "../../Fire.js";
import { useHistory } from "react-router-dom";
import { Context } from "../../App";

function HomeScreen() {
  const user = useContext(Context)

 
  const [bestsellers, setbestsellers] = useState([]);
  const [dod, setdod] = useState([]);
  const [role,setRole] = useState("");
  const history = useHistory();
  useEffect(() => {
    db.collection("Starter")
      .doc("load")
      .get()
      .then((bs) => {
        const value = bs.data();
        setbestsellers(value.bestsellers);
        setdod(value.dod);
      });
  }, []);

  useEffect(()=>{
   if(user){

     db.collection("Users").doc(user.uid).get().then((response)=>{
       var data = response.data();
        setRole(data.role)
      })
    }
    },[user])

  return (
    <div className="App">
    <Header />
    <img
    className="Image"
    src="https://firebasestorage.googleapis.com/v0/b/the-rich-oven.appspot.com/o/Landing%20Picture%2FGroup%208.png?alt=media&token=a02b11c5-c86a-4879-877c-87642bba0949"
    />
    {role === "admin"?
    <div style={{display:"flex",justifyContent:"center"}}>
    <Button 
    onClick={()=>{history.push("/Admin")}}
    variant="outlined">
   Admin Dashboard
    </Button>
    </div>:null
  }
    {/* this is the bestsellers  */}
      <div className="bestS">
        <div className="line" />
        <p className="BestsellerText">Bestsellers</p>
        <div className="line" />
      </div>
      <div className="bestsellers" id="bestsellers">
        <div className="scrollLeft">
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("bestsellers").scrollLeft -= 100;
            }}
          >
            {"<<"}
          </Button>
        </div>
        {bestsellers
          ? bestsellers.map((product) => {
              return (
                <ProductDisplay
                  name={product.name}
                  price={product.price}
                  imageURL={product.url}
                />
              );
            })
          : null}
        <div className="scrollRight">
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("bestsellers").scrollLeft += 100;
            }}
          >
            {">>"}
          </Button>
        </div>
      </div>

      {/* this is the deals of the day  */}
      <div className="bestS">
        <div className="line" />
        <p className="BestsellerText">Deals of the day</p>
        <div className="line" />
      </div>
      <div className="bestsellers" id="dealsOfTheDay">
        <div className="scrollLeft">
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("dealsOfTheDay").scrollLeft -= 100;
            }}
          >
            {"<<"}
          </Button>
        </div>
        {dod ? (
          dod.map((product) => {
            return (
              <ProductDisplay
                name={product.name}
                price={product.price}
                imageURL={product.url}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
        <div className="scrollRight">
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("dealsOfTheDay").scrollLeft += 100;
            }}
          >
            {">>"}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
