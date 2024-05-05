import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props)
{
    const navigate =useNavigate()
    const [eusername,seteusername]=useState("")
    const [epassword,setepassword]=useState("")
    const[ruser,setruser]=useState(true)

    const user= props.user
    
    

    function checkuser()
    {    var userfound = false
        
        user.forEach(function(item){
        
            if(item.username === eusername && item.password ===epassword)
                {
                    console.log("login success")
                    userfound =true
                    navigate("/landing",{state:eusername})
                }
        })
        if(userfound === false)
            {
                console.log("login Failed")
                setruser(false)
            }

    }
    function handleuserinput(evt)
    {
        seteusername(evt.target.value)
    }
    function handlepassinput(evt)
    {
        setepassword(evt.target.value)
    }
  return(
    <div className="bg-black p-10">
    <div className="bg-white p-10 broder rounded" >
        <h1 className="text-3xl font-medium ">Hey Hi</h1>
        {ruser?  <p>I help you manage your activites after you login :)</p>: <p className='text-red-500'>Please signup before you login :)</p>}
       
        <div className="flex flex-col mt-2 gap-3">
            <input onChange={handleuserinput} className="w-52 border-black border rounded p-1" placeholder="Username" >

            </input>
            <input onChange={handlepassinput}className="w-52 border-black border rounded p-1" placeholder="Password" >
            </input>
        </div>
        <button className="bg-violet-600 px-3 py-1 border rounded-md mt-2" onClick={checkuser}>Login</button>
        <p>Don't have an account? <Link to={"/signup"} className='underline'>Signup</Link></p> 
    </div>
    </div>

  )
}
export default Login