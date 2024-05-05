import React from "react"

import Todoitem from "./todoitem"
function Addtodolist(props)
{
  const listarr =props.listarr
  const setlistarr =props.setlistarr


    return(
        <div className="bg-[#BDB4EA] p-2 flex-grow ">
        <h1 className="text-2xl font-medium">Today  Activity</h1>
        
        {listarr.length === 0? <p>You haven't added nothing yet</p>:""}
        {
            listarr.map(function(item,index)
            {
            return(
                <Todoitem id={item.id} activity={item.activity} index={index} listarr={listarr} setlistarr={setlistarr} />
            ) 
        }
        )
        }
    </div>
    )
}
export default Addtodolist