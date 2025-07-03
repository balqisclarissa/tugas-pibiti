import CardDepartemen from './CardDepartemen.jsx'
import './Departemen.css'

const departemen = [
    {
        title: 'Penyakit Dalam',
        image: './penyakit-dalam.png',

    },
    {
        title: 'Anak (Pediatri)',
        image: './anak.png',
    },
    {
        title: 'Saraf',
        image: './saraf.png',
    },
    {
        title: 'Mata',
        image: './mata.png',
    },
    {
        title: 'Gigi & Mulut',
        image: './gigi.png',
    },
    {
        title: 'THT',
        image: './tht.png',
    },
    { 
        title: 'Jantung',
        image: './jantung.png',
    },
    {
        title: 'Bedah Orthopedi',
        image: './orthopedi.png',
    },
];

function Departemen() {
    return (
        <div className="container-departemen">
            <a className="departemen-title">Departemen</a>
            <div className="grid-departemen">
                {departemen.map((item, index) => (
                    <CardDepartemen 
                        key={index} 
                        title={item.title} 
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}
export default Departemen;