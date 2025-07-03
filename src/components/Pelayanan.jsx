import CardPelayanan from './CardPelayanan';
import './CardPelayanan.css';

const layanan = [
    {
        title: 'Pendaftaran Online',
    },
    {
        title: 'Riwayat Pelayanan',
    },
    {
        title: 'Info Pembayaran',
    },
    {
        title: 'Jadwal Operasi',
    },
    {
        title: 'Ketersediaan Kamar',
    },
    {
        title: 'Jadwal Obat',
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
                    />
                ))}
            </div>
        </div>
    )
}
export default Pelayanan;