import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className="header">
            <div className="header_container1">
                <h1 className="header_logo">GROWSHOP</h1>
            </div>
            
            <div className="header_container2">
                <nav className="header_nav">
                    <Link className="header_link" to="/">Inicio</Link>
                    <Link className="header_link" to="/nosotros">Nosotros</Link>
                    <Link className="header_link" to="/ncontacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header 