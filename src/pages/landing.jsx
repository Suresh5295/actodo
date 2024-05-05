import Header from "../header.jsx";
import Card from "../card.jsx";
import Todocontainer from "../todocontainer.jsx";
import { useLocation } from "react-router-dom"
function Landing()
{
    const data = useLocation()
    return(
    <div className='bg-black p-10'>
    <div className='bg-white p-5 border rounded-md'>
    <Header username={data.state}/>
    <div className="flex gap-7  my-5 justify-around flex-wrap">
    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}/>
    <Card bgcolor={"#FD6663"} title={"May 02"} subtitle={"14:20"}/>
    <Card bgcolor={"#FCA201"} title={"Using"} subtitle={"React"}/>
    </div>
    <Todocontainer/>
    </div>
  
  </div>
  )
}
export default Landing