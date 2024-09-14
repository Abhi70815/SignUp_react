import React, { useContext, useState } from 'react';
import s from './css/signup.module.css'
import { DataContext } from './App'

import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [msg, setmsg]= useState(false);
  const [auth, setAuth] = useState(false);
  const { data, addData } = useContext(DataContext);
  const {name, email, password, cpassword}=data;


  console.log(data.name, email, password, cpassword)
  const navigate = useNavigate(); // uncomment this line
  let str ="acbbb";

  const formHnadle=(e)=>{
      e.preventDefault();
      if(data.name.length>0 && data.email.length>0 && data.password.length>0 && data.cpassword.length>0){
        setmsg(true);
      setAuth(false);

        console.log("hii")
        setTimeout(()=>navigate("/profile"), 5000);
      }
      else{

      setAuth(true);
      setmsg(false);
    }
      
    //  setAuth(false)
  
  }
  // console.log( auth)
  return (
    <div className={s.container}>
        <h1>Signup</h1>
        <form onSubmit={formHnadle}>
           <input type="text" placeholder='FullName' name="name" onChange={(e) => addData(e)}/>
           <input type="email" placeholder='Email' name="email" onChange={(e) => addData(e)}/>
           <input type="password" placeholder='Password' name='password' onChange={(e) => addData(e)}/>
           <input type="password" placeholder='Confirm Password'name='cpassword' onChange={(e) => addData(e)}/>

           { msg && <p style={{color:'green'}}>Successfully Signed Up!</p>}
           {auth && <p style={{color:"red"}}>Error: All field are mandatory</p>}
           <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default SignUp