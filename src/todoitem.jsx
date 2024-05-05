function Todoitem(props)
{
    const listarr=props.listarr
    const setlistarr=props.setlistarr

   function handledel(delid)
   {
var temparr = listarr.filter(function(item)
{
    if (item.id === delid)
{
    return false
}else{
    return true
}
})
setlistarr(temparr)
   }
  
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>{handledel(props.id)}}>Delete</button>
        </div>
    )
}
export default Todoitem