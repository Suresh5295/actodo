import { useState } from "react"

function Addtodoform(props)
{
    const listarr =props.listarr
    const setlistarr =props.setlistarr

    const [newactivity,setnewactivity]=useState("")

    function handlechange(evt){
        setnewactivity(evt.target.value) 
    }

    function handleadd(){
        setlistarr([...listarr,{id:listarr.length+1,activity:newactivity}])
    } 

  
    return(
        <div>
        <h1 className="text-2xl font-medium mb-2">Manage Activity</h1>
        <input value={newactivity} onChange={handlechange}className="border border-black bg-transparent p-1"></input>
        <button className="bg-black border border-black p-1 text-white " onClick={handleadd}>Add</button>
          </div>
    )
}
export default Addtodoform