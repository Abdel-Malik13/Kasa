import logo from '../../assets/LOGO-F.png';
import '../../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="" width="122px" height="39.44px" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;