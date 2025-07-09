import CardJadwalObat from './CardJadwalObat';
import './JadwalObat.css';

const obat = [
    {
        obat: 'Pantoprazole',
        jadwal: '1 x sehari',
        waktu: 'Sebelum sarapan',
        dosis: '20 mg',
    },
    {
        obat: 'Amoxilin',
        jadwal: '2 x sehari',
        waktu: 'Sebelum makan',
        dosis: '20 mg',
    },
]

function JadwalObat() {
    return (
        <div className="container-obat">
            <div className="grid-obat">
                {obat.map((item, index) => (
                    <CardJadwalObat
                    key={index}
                    obat={item.obat}
                    jadwal={item.jadwal}
                    waktu={item.waktu}
                    dosis={item.dosis}
                    />
                ))}
            </div>
        </div>
    )
}
export default JadwalObat;