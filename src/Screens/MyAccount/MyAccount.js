import { Button, TextField } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../App'
import Header from '../../Components/Header'
import { db } from '../../Fire'
import "../MyAccount/MyAccount.css"
function MyAccount() {
    const history = useHistory();
    const user = useContext(Context)
    function isNumeric(num){
        return !isNaN(num)
      }
    useEffect(async()=>{
        if(user){

            await db.collection("Users")
            .doc(user.uid).get()
            .then((doc)=>doc.data())
            .then((data)=>{
                setAddress(data.address)
                setName(data.name)
                setPhone(data.phone)
                setPincode(data.pincode)
                
            })
        }else{
            history.push("/")
        }
        },[user])
    const [address, setAddress]= useState("")
    const [name,setName]= useState("");
    const [phone, setPhone] = useState(0);
    const [pincode, setPincode] = useState(0);

    const saveClicked= async()=>{

        if (isNumeric(phone) && isNumeric(pincode)){
            await db.collection("Users")
            .doc(user.uid).update({
                name:name,
                address:address,
                phone:parseInt(phone),
                pincode:parseInt(pincode),
            }).then(()=>{alert("information updated")})
        }
        else{
            alert("phone or pincode are not numbers")
        }
    }
        return (
        <div>
            <Header/>
            <div style={{display:"flex",justifyContent:"center"}}>
            <p className="heading" style={{fontSize:24}}>my orders</p>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <p className="heading" style={{fontSize:24}}>Account details</p>
            </div>
            <div className="accDetails">
           <div className="left">
           <TextField 
           style={{marginBottom:50}}
           variant="outlined" 
           label="name" 
           type="name"
           value={name}
           onChange={(val)=>{setName(val.target.value)}}
           /> 
           <TextField 
           style={{marginBottom:50}}
           variant="outlined" 
           label="phone number" 
           type="phone"
           value={phone||''}
           onChange={(val)=>{setPhone(val.target.value)}}
           />
           </div>
           <div className="right">
           <TextField 
           style={{marginBottom:50,maxWidth:"100vw"}}
           variant="outlined" 
           label="address" 
           type="address"
           value={address}
           onChange={(val)=>{setAddress(val.target.value)}}
           multiline={true}
           />  
           <TextField 
           style={{marginBottom:50}}
           variant="outlined" 
           label="pincode" 
           value={pincode||0}
           onChange={(val)=>{setPincode(val.target.value)}}
           />
           </div>
           </div>
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Button variant="outlined" size="large" onClick={()=>{saveClicked()}}>Save</Button>
            </div>
        </div>
    )
}

export default MyAccount
