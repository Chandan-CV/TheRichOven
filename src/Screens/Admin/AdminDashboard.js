import { Button, LinearProgress, TextField } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../App'
import Header from '../../Components/Header';
import { db } from '../../Fire'
import "../Admin/Admin.css"
function AdminDashboard() {
    const history = useHistory();
    const user = useContext(Context)
    useEffect(()=>{
        if(user){
            db.collection("Users").doc(user.uid).get().then((response)=>{
                const data= response.data();
                if(data.role!=="admin"){
                    history.push("/")
                }
            })
        }else{
            history.push("/")
        }
    },[user])
   
   
    return (
        <div>
        <Header/>
           <div className="AddProduct">
           <p>Add Product</p>
            <Button 
            style={{marginTop:30}}
            
            >upload image</Button>
          
            <LinearProgress
           variant="determinate"
            style={{height:2,width:"60%"}}
           value={50} 
           color="primary" 
           />
           <TextField style={{width:"60%", marginTop:20}} variant="outlined" label="Product name" />
           <TextField style={{width:"60%", marginTop:20}} label="Price in INR" variant="outlined"   />
           <TextField style={{width:"60%", marginTop:20}} label="Product description" variant="outlined" multiline={true} />
           <TextField style={{width:"60%", marginTop:20}} label="tags separated by a comma" variant="outlined"  multiline={true} />
           </div>
        </div>
    )
}

export default AdminDashboard
