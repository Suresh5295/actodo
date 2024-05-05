import Addtodoform from "./addtodoform"
import Addtodolist from "./addtodolist"
import { useState } from "react"

function Todocontainer(){
    const [listarr,setlistarr]=useState([
        {
            id:1,
            activity:"Go for a Walk",
        },
        {
            id:2,
            activity:"Have a breakfast",
        },
        {
            id:3,
            activity:"Take a cold shower",
        
        }
     ])
    return(
        <div>
        <div className="flex gap-5  flex-wrap">
 <Addtodoform listarr={listarr} setlistarr={setlistarr}/>
 <Addtodolist listarr={listarr} setlistarr={setlistarr} />
    
  </div>
  </div>
    )
}
export default Todocontainer