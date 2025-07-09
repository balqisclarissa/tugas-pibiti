import CardPelayanan from './CardPelayanan';
import './CardPelayanan.css';

const layanan = [
    {
        title: 'Pendaftaran Online', route: 'pendaftaran',
    },
    {
        title: 'Info Pendaftaran', route: 'infopendaftaran',
    },
    {
        title: 'Riwayat Pelayanan', route: 'riwayat',
    },
    {
        title: 'Info Pembayaran', route: 'pembayaran',
    },
    {
        title: 'Jadwal Operasi', route: 'operasi',
    },
    {
        title: 'Ketersediaan Kamar', route: 'ketersediaan',
    },
    {
        title: 'Jadwal Obat', route: 'obat',
    },
];

function Pelayanan() {
    return (
        <div className="container">
            <a className="pelayanan-title">Pelayanan</a>
            <div className="grid-pelayanan">
                {layanan.map((item, index) => (
                    <CardPelayanan 
                        key={index} 
                        title={item.title} 
                        route={item.route}
                    />
                ))}
            </div>
        </div>
    )
}
export default Pelayanan;