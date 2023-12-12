import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import '../../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" width='210.32px' height='68px' />

            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;