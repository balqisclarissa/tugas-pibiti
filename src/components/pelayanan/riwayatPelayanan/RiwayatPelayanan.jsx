import CardRiwayatPelayanan from './CardRiwayatPelayanan.jsx';
import './RiwayatPelayanan.css';

const riwayat = [
    {
        departemen: 'Departemen Penyakit Dalam',
        diagnosa: 'Diagnosa',
        jenisDiagnosa: 'Gastritis Kronik',
        pengobatan: 'Terapi Obat',
    },
    {
        departemen: 'Departemen Jantung',
        diagnosa: 'Diagnosa',
        jenisDiagnosa: 'Hipertensi',
        pengobatan: 'Terapi Obat',
    },
    {
        departemen: 'Gigi & Mulut',
        diagnosa: 'Diagnosa',
        jenisDiagnosa: 'Karies Gigi',
        pengobatan: 'Penambalan Gigi',
    },
]

function RiwayatPelayanan() {
    return (
        <div className="container">
            <div className="grid-riwayat">
                {riwayat.map((item, index) => (
                    <CardRiwayatPelayanan
                    key={index}
                    departemen={item.departemen}
                    diagnosa={item.diagnosa}
                    jenisDiagnosa={item.jenisDiagnosa}
                    pengobatan={item.pengobatan}
                    />
                ))}
            </div>
        </div>
    )
}
export default RiwayatPelayanan;