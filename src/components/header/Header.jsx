import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const appName = "MedicalHealth";
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return (
        <header className="header">
            <h2 className="app-name">{appName}</h2>
                <nav className="navbar">
                    <ul className="ul-navbar">
                        <li className="li-navbar"><a href="#beranda" className="beranda">Beranda</a></li>
                        <li className="li-navbar"><a href="#pelayanan" className="pelayanan">Pelayanan</a></li>
                        <li className="li-navbar"><a href="#departemen" className="departemen">Departemen</a></li>
                        <li className="li-navbar"><a href="#kontak" className="kontak">Kontak</a></li>
                    </ul>
                    {!isLoggedIn && (
                        <ul className="daftar-login">
                            <li><Link to="/login" className="login">Masuk</Link></li>
                            <li><Link to="/daftar" className="daftar">Daftar</Link></li>
                        </ul>
                    )}

                    {isLoggedIn && (
                        <button className="logout" onClick={() => {
                            localStorage.removeItem("isLoggedIn");
                            localStorage.removeItem("activeUser");
                            window.location.reload();
                        }}>
                            Logout
                        </button>
                    )}
                </nav>
        </header>
    );
}

export default Header;