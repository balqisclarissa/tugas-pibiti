import CardJadwalOperasi from './CardJadwalOperasi.jsx';
import './JadwalOperasi.css';

const operasi = [
    {
        tanggal: 'Jumat, 11 Juli 2025',
        waktu: '08.00 WIB',
        dokter: 'drg. Andi, Sp.BM',
        jenis: 'Operasi Odontektomi',
        status: 'Terjadwal',
    },
]

function JadwalOperasi() {
    return (
        <div className="container-operasi">
            <div className="grid-operasi">
                {operasi.map((item, index) => (
                    <CardJadwalOperasi
                    key={index}
                    tanggal={item.tanggal}
                    waktu={item.waktu}
                    dokter={item.dokter}
                    jenis={item.jenis}
                    status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}
export default JadwalOperasi;