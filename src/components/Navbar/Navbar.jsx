import Image from '../../assets/brand_logo.png'
const Navbar = ()=>{
    return(
        <nav>
            <img src={Image}/>

            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    )
}

export default Navbar