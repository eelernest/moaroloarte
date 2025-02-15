import "./styles_components/nav.css"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <div className="nav-logo">
                <img className="logo" src="/logo.jpg"/>
            </div>
            <div className="nav-menu">
                <ul className="nav-options">
                    <li>
                        <Link className="link" href="/">Nuestros Servicios</Link>
                    </li>
                    {/* <li>
                        <Link className="link" href="/">Login</Link>
                    </li> */}
                    
                </ul>
            </div>
        </nav>
    )
}