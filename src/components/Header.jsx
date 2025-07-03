function Header() {
    const appName = "MedicalHealth";
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
                    <ul className="daftar-login">
                        <li><a className="daftar">Daftar</a></li>
                        <li><a className="login">Login</a></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;