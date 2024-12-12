import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRef, useState } from "react";
import "./register.css";

export default function Register({setshowRegister}) {
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleSubmit= async(e) =>{
        e.preventDefault()
       const newuser={
        username:usernameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
       } 
       try{
          await axios.post('http://localhost:3000/api/users/register',newuser)
        setSuccess(true)
        setError(false)
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
        <FontAwesomeIcon icon={faTimes} className='cancel' onClick={() =>setshowRegister(false)}/>
            <input type="text" placeholder="Username" ref={usernameRef}/>
            <input type="email" placeholder="Email" ref={emailRef}/>
            <input type="password" placeholder="Password" ref={passwordRef}/>
            <button className='RegisterBtn'>Register</button>
           {success &&(<span className='success'> Successful.You can log in now!  </span>)} 
           {error &&(<span className='failure'> Something went wrong.  </span>)} 
        </form>

    </div>
  )
}

        
