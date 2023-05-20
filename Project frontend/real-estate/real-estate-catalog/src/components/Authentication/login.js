import React, { useState } from "react"
// import { Icon } from 'react-icons-kit';
// import {eyeOff} from 'react-icons-kit/feather/eyeOff';
// import {eye} from 'react-icons-kit/feather/eye';
 import { Link, useNavigate } from "react-router-dom";
import "./login.css"
const Login=(props)=>{
    const {token,settoken,id,setid,name,setname}=props;
    settoken("")
    const [input,setInput]=useState("")
    // const [type,settype]=useState("password")
    // const [icon,setIcon]=useState(eyeOff)
    // const Toggle=()=>{
    //     if(type==="password"){
    //         setIcon(eye);
    //         settype("text")
    //     }
    //     else{
    //         setIcon(eyeOff);
    //         settype("password")
    //     }
    // }

    let nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch ("https://realestate10x.herokuapp.com/users/login",{
            method:"POST",
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
          }).then((data)=>data.json())
          .then((response)=>{if(response.status==="Success"){
            settoken(response.token)
            setid(response.id)
            setname(input.userid)
            nav("/property")

        }else{
        alert(response.message)}
          })
               //console.log(input)
        
    }
    return(
        <>
        <div className="cover">
        <div className="login-form">
            <div>
                <div className="login-logo"><i class="fa-solid fa-city"><span>Estate</span></i></div>
        
                <h4>Login Here</h4>
                <div className="text">Enter your credentials to access your account</div>
            </div>
            <form className="login-data" onSubmit={handleSubmit} >
          

                <input className="userdata"  name="userid"
                  type={"email"}
                required
                placeholder="User ID"
                onChange={(e)=>{setInput({...input,userid:e.target.value})}}
                />



           <input  required type="password" placeholder="Password" onChange={(e)=>{setInput({...input,password:e.target.value})}}           />


            <button type="sumbit">Sign In</button>
            Don't have an account?<Link to="/">Sign Up</Link> 

          </form>
         
        </div>
        </div>

        </>
    )
}
export default Login
 
