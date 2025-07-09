import './Beranda.css'

function Beranda() {
    return (
        <div className="main">
            <div className="home">
                <ul className="tentang-kami">
                    <li className="title1">Tentang</li>
                    <li className="title2">Kami</li>
                </ul>
                <div className="paragraf">
                    <p className="paragraf1">
                        MedicalHealth adalah rumah sakit modern yang berkomitmen memberikan pelayanan kesehatan terbaik bagi seluruh lapisan masyarakat. Dengan menggabungkan teknologi medis terkini, tenaga ahli profesional, dan pendekatan humanis, kami menghadirkan pengalaman perawatan yang aman, nyaman, dan terpercaya.
                    </p>
                    <p className="paragraf2">
                        Sejak berdiri, MedicalHealth terus berkembang menjadi pusat layanan kesehatan terpadu yang berfokus pada kualitas, kecepatan, dan ketepatan diagnosis serta pengobatan. Didukung oleh dokter spesialis dari berbagai bidang, fasilitas canggih, dan sistem digital yang efisien, kami memastikan setiap pasien mendapatkan perhatian maksimal dari awal hingga akhir masa perawatan.
                    </p>
                    <p className="paragraf3">
                        Kami percaya bahwa kesehatan adalah investasi utama kehidupan, dan karenanya, MedicalHealth hadir bukan hanya sebagai tempat penyembuhan, tapi juga sebagai mitra dalam menjaga gaya hidup sehat masyarakat.
                    </p>
                </div>
            </div>
            <ul className="emergency">
                <li>Panggilan Darurat</li>
                <li>+62 812 3456 7890</li>
            </ul>
        </div>
    )
}
export default Beranda;