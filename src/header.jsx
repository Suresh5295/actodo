function Header(props)
{
    return(
        <>       <h1 className='text-2xl font-medium'>Hello {props.username}!</h1>
        <p>I help you manage your activities :)</p>
        </> 
    )
}
export default Header