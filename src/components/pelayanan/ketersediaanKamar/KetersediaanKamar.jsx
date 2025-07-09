import CardKetersediaanKamar from './CardKetersediaanKamar';
import './KetersediaanKamar.css';

const kamar = [
    {
        nomor: '001',
        jenis: 'Jenis: VIP',
        status: 'Status: Terisi',
        kapasitas: 'Kapasitas: 1',
    },
    {
        nomor: '002',
        jenis: 'Jenis: VIP',
        status: 'Status: Tersedia',
        kapasitas: 'Kapasitas: 1',
    },
    {
        nomor: '101',
        jenis: 'Jenis: Kelas 1',
        status: 'Status: Terisi',
        kapasitas: 'Kapasitas: 2',
    },
    {
        nomor: '102',
        jenis: 'Jenis: Kelas 1',
        status: 'Status: Terisi',
        kapasitas: 'Kapasitas: 2',
    },
    {
        nomor: '103',
        jenis: 'Jenis: Kelas 1',
        status: 'Status: Tersedia',
        kapasitas: 'Kapasitas: 2',
    },
    {
        nomor: '201',
        jenis: 'Jenis: ICU',
        status: 'Status: Tersedia',
        kapasitas: 'Kapasitas: 1',
    },
]

function KetersediaanKamar() {
    return (
        <div className="container">
            <div className="grid-ketersediaan">
                {kamar.map((item, index) => (
                    <CardKetersediaanKamar
                    key={index}
                    nomor={item.nomor}
                    jenis={item.jenis}
                    status={item.status}
                    kapasitas={item.kapasitas}
                    />
                ))}
            </div>
        </div>
    )
}
export default KetersediaanKamar;