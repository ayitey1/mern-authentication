import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";


;

function App() {
  
  const myStorage  = window.localStorage;
  const [Currentuser, setisCurrentuser] = useState(null);
  const[showRegister,setshowRegister] = useState(false);
  const[showLogin,setshowLogin] = useState(false); 
 

  const handlelogout =() =>{
    myStorage.removeItem("user");
    setisCurrentuser(null)
    console.log(Currentuser)
    }
    const handleLogin = () => {
      setshowLogin(true);
      setshowRegister(false);
    }
    const handleRegister = () => {
      setshowRegister(true);
      setshowLogin(false);
    }
    
  return (
    <div className="App">
      hello
      {Currentuser?(
        <button className="button login" onClick={handlelogout}>Log Out</button>
      ):(
        <div className="buttons">
          <button className="button login" onClick={handleLogin}>Login</button>
          <button className="button register" onClick={handleRegister}>Register</button>
        </div>
      )}
      {showRegister &&<Register setshowRegister={setshowRegister}  />}
    {showLogin &&<Login setshowLogin={setshowLogin} myStorage={myStorage} setisCurrentuser={setisCurrentuser} />}

    </div>
    
  );
}

export default App;
