import React from "react";
import { useNavigate,Link} from "react-router-dom";
import {useState} from "react";

import "./register.css"

const Register=()=>{

  let nav=useNavigate()
  const [password,setPassowrd]=useState("")
  const [form,setform]=useState({
  MailID:"",
  password:"",
        })
// var handlesubmit=0

 const handlesubmit=(e)=>{
  e.preventDefault()
  if(form.password===password){
  console.log(form)
  
 
  fetch("https://realestate10x.herokuapp.com/users/add",{
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
  }).then((data)=>data.json())
  .then((response)=>alert(response.message))
  nav("/login") 
  }
  else{
    alert("password doesnt match")
  }
}
  // else{
  //   handlesubmit=(e)=>{
  //     e.preventDefault()
  //     alert("password doesnt match")
  //   }
  // }
    return(
        <>
        <div className="cover">
         <div className="register-form">
            <div className="register-header">
            <div className="login-logo"><i class="fa-solid fa-city"><span>Estate</span></i></div>
            <h4>Register</h4>
          <div className="text">Create New Account</div>
          </div>

          <form className="register-data" onSubmit={handlesubmit}>
          
                                              
           <input  name="MailID"
           type={"email"}
           placeholder="MailID"
           value={form.MailID}
           required
           onChange={(e)=>{setform({...form,MailID:e.target.value})}}

          />
          <input name="password"
             placeholder="Password"
           
             required
             onChange={(e)=>{setform({...form,password:e.target.value})}}

             />
        <input name="confirmpassword"
             placeholder="ConfirmPassword"
             type="password"
           value={password}
             required
             onChange={(e)=>{setPassowrd(e.target.value)}}
             

             />

          <button type="submit">Sign Up</button>
          Have an account?<Link to="/login">Login now</Link> 
  
      </form>
        </div>
        </div>
         
        </>
    )
}
export default Register
