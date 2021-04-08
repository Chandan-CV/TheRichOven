import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../Fire';

function Recover() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
 

    const handleSubmit= async()=>{
        await auth.sendPasswordResetEmail(email).then(()=>{history.push("/login")}).catch((err)=>{
            if(err.code === "auth/invalid-email"){
                setError("invalid Email")
            }
            if(err.code ==="auth/user-not-found"){
                setError("User not found")

            }
        })
 
    }
    return (
        <div>
           
           <div className="LoginMain">
           <div className="LoginCard">
           <div className="header">
           <p className="font">Reset Password</p>
           </div>
           <p style={{fontSize:18, color:"red", alignSelf:"center"}}>{error}</p>
           <div className="input">
           <TextField
           variant="outlined"
           label="email"
           type="email"
           value={email}
           onChange={(val) => {
               setEmail(val.target.value);
            }}
            />
            </div>
            
            <Button 
            variant="outlined" 
            type="submit"
            style={{marginTop:20}}
            onClick={()=>{handleSubmit()}}
            >
            Email Password
            </Button>
           
            </div>
            </div>
            </div>
            )
}

export default Recover
