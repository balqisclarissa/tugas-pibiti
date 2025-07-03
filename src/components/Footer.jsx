import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-contain">
                    <h3>MedicalHealth</h3>
                    <p>Memberikan pelayanan terbaik demi kesehatan Anda</p>
                </div>
                <div className="footer-contain">
                    <h3>Kontak</h3>
                    <p>📍 Jl. Kesehatan No. 16, Surabaya, Jawa Timur</p>
                    <p>☎️ (031) 987-6543</p>
                    <p>✉️ medicalhealth@gmail.com</p>
                </div>
                <div className="footer-contain">
                    <h3>Jam Operasional</h3>
                    <p>Senin - Jum'at: 08.00 - 22.00 WIB</p>
                    <p>Sabtu - Minggu: 09.00 - 19.00</p>
                </div>
            </div>
            <div className="footer-bottom">
                <a>&copy; 2025 MedicalHealth. All rights reserved.</a>
            </div>
        </footer>
    )
}
export default Footer;