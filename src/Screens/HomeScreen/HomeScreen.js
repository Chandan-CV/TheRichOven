import React from 'react'
import "../HomeScreen/HomeScreen.css"
import Header from '../../Components/Header.js'

function HomeScreen() {
    return (
        <div className="App">
         <Header/>
         <img className="Image"
         src="https://firebasestorage.googleapis.com/v0/b/the-rich-oven.appspot.com/o/Landing%20Picture%2FGroup%208.png?alt=media&token=a02b11c5-c86a-4879-877c-87642bba0949"
         />
         <div className="bestS">
                        <div className="line"/>
                            <p className="BestsellerText">Bestsellers</p>
                        <div className="line"/>
         </div>
         </div>
    )
}

export default HomeScreen
