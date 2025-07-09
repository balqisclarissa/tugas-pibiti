import CardInfoPembayaran from './CardInfoPembayaran.jsx';
import './InfoPembayaran.css';

const pembayaran = [
    {
        tanggal: 'Senin, 03 Februari 2025',
        pengobatan: 'Terapi Obat',
        harga: 'Rp.100.000',
        status: 'Lunas',
    },
    {
        tanggal: 'Rabu, 16 April 2025',
        pengobatan: 'Terapi Obat',
        harga: 'Rp. 80.000',
        status: 'Lunas',
    },
    {
        tanggal: '09 Juli 2025',
        pengobatan: 'Penambalan Gigi',
        harga: 'Rp.70.000',
        status: 'Menunggu Pembayaran',
    },
]

function InfoPembayaran() {
    return (
        <div className="container-pembayaran">
            <div className="grid-pembayaran">
                {pembayaran.map((item, index) => (
                    <CardInfoPembayaran
                    key={index}
                    tanggal={item.tanggal}
                    pengobatan={item.pengobatan}
                    harga={item.harga}
                    status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}
export default InfoPembayaran;