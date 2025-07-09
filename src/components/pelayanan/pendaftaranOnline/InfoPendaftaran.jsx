import './InfoPendaftaran.css';

const InfoPendaftaran = () => {
    const data = JSON.parse(localStorage.getItem('dataPendaftaran'));

    if (!data) {
        return <p>Data pendaftaran tidak ditemukan</p>;
    }

    return (
        <div className="info-pendaftaran">
            <h2>Info Pendaftaran</h2>
            <ul>
                <li><strong>Nama: </strong>{data.nama}</li>
                <li><strong>NIK: </strong>{data.nik}</li>
                <li><strong>Tanggal Lahir: </strong>{data.tanggalLahir}</li>
                <li><strong>Jenis Kelamin: </strong>{data.jenisKelamin}</li>
                <li><strong>No HP: </strong>{data.noHp}</li>
                <li><strong>Alamat: </strong>{data.alamat}</li>
                <li><strong>Departemen: </strong>{data.departemen}</li>
                <li><strong>Tanggal Kunjungan: </strong>{data.tanggalKunjungan}</li>
            </ul>
        </div>
    );
};
export default InfoPendaftaran;