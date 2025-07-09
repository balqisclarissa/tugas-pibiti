import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PendaftaranOnline.css';

const PendaftaranOnline = () => {
    const [form, setForm] = useState({
        nama: '',
        nik: '',
        tanggalLahir: '',
        jenisKelamin: '',
        noHp: '',
        alamat: '',
        departemen: '',
        tanggalKunjungan: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('dataPendaftaran', JSON.stringify(form));
        navigate('/infopendaftaran');
    };

    return (
        <div className="container-pendaftaran">
            <h3>Pendaftaran Online</h3>
            <form onSubmit={handleSubmit} className="form-daftar-online">
                <input type="text" name="nama" placeholder="Nama Lengkap" required onChange={handleChange} />
                <input type="text" name="nik" placeholder="NIK" required onChange={handleChange} />
                <input type="date" name="tanggalLahir" required onChange={handleChange} />
                <select name="jenisKelamin" required onChange={handleChange}>
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
                <input type="text" name="noHp" placeholder="Nomor HP" required onChange={handleChange} />
                <textarea name="alamat" placeholder="Alamat Lengkap" required onChange={handleChange}></textarea>
                <select name="departemen" required onChange={handleChange}>
                    <option value="">Pilih Departemen</option>
                    <option value="Penyakit Dalam">Penyakit Dalam</option>
                    <option value="Anak">Anak</option>
                    <option value="Saraf">Saraf</option>
                    <option value="Mata">Mata</option>
                    <option value="Gigi dan Mulut">Gigi dan Mulut</option>
                    <option value="THT">THT</option>
                    <option value="Jantung">Jantung</option>
                    <option value="Bedah Orthopedi">Bedah Orthopedi</option>
                </select>
                <input type="date" name="tanggalKunjungan" required onChange={handleChange} />
                <button type="submit">Daftar</button>
            </form>
        </div>
    );
};
export default PendaftaranOnline;