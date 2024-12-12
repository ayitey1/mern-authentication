import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRef, useState } from "react";
import "./register.css";

export default function Login({setshowLogin,myStorage,setisCurrentuser}) {
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const usernameRef = useRef()
    const passwordRef = useRef()
    const handleSubmit= async(e) =>{
        e.preventDefault()
       const newuser={
        username:usernameRef.current.value,
        password:passwordRef.current.value
       } 
       try{
        const  res = await axios.post('http://localhost:3000/api/users/login',newuser)
          myStorage.setItem("user",res.data.username)
          setisCurrentuser(res.data.username)
          setshowLogin(false)
        setSuccess(true)
        setError(false)
       console.log(res)
       console.log(res.data.username)
       }
       catch(err){
        setError(true)
       }
    }
 
    return (
    
    <div className="registerContainer">
        <div className="logo">
        </div>
        <form onSubmit={handleSubmit} >
        <FontAwesomeIcon icon={faTimes} className='cancel' onClick={() =>setshowLogin(false)}/>
            <input type="text" placeholder="Username" ref={usernameRef}/>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button className='RegisterBtn'>Register</button>
           {success &&(<span className='success'> Successful.You can log in now!  </span>)} 
           {error &&(<span className='failure'> Something went wrong.  </span>)} 
        
        </form>
             
              
             
    </div>
  )
}

        
