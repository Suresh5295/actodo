import Header from "./header.jsx";
import Card from "./card.jsx";
import Todocontainer from "./todocontainer.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login.jsx"
import Signup from "./pages/signup.jsx";
import Landing from "./pages/landing.jsx";
function App()
{
    const [user,setuser]=useState([
        {
            username:"john",
            password:"123"
        }

    ])
    return(
        <div>
        <BrowserRouter>
      
        
        <Routes>
        <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
        <Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
       
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App