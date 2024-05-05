import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup(props)
{

const navigate= useNavigate()
  const user=props.user
  const setuser=props.setuser

  const [eusername,seteusername]=useState("")
  const [epassword,setepassword]=useState("")

  function handleuserinput(evt)
  {
      seteusername(evt.target.value)
  }
  function handlepassinput(evt)
  {
      setepassword(evt.target.value)
  }
  function adduser()
  {
    setuser([...user,{username:eusername ,password:epassword}])
    navigate("/")
  }
  return(
    <div className="bg-black p-10">
    <div className="bg-white p-10 broder rounded" >
        <h1 className="text-3xl font-medium ">Hey Hi</h1>
        <p>You can signup here :)</p>
        <div className="flex flex-col mt-2 gap-3">
            <input className="w-52 border-black border rounded p-1" placeholder="Username" onChange={handleuserinput} >
         
            </input>
            <input className="w-52 border-black border rounded p-1" placeholder="Password" onChange={handlepassinput}>
           
            </input>
            <input className="w-52 border-black border rounded p-1" placeholder="Confirm Password" onChange={handlepassinput} >
          
            </input>

        </div>
        <button onClick={adduser} className="bg-orange-400 px-3 py-1 border rounded-md mt-2">Sign Up</button>
        <p>Already have an account? <Link to={"/ "} className='underline'>Login</Link></p> 
    </div>
    </div>


  )
}
export default Signup