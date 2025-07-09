import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrasi.css';

const Daftar = () => {
    const [data, setData] = useState({ name: '', email: '', password: ''});
    const navigate = useNavigate();


const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

const Pendaftaran = (e) => {
    e.preventDefault();
    
    if (data.password.length < 6) {
        alert("Password minimal 6 karakter");
    } else {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Pendaftaran berhasil");
        navigate("/login");
    }
};

return (
    <div className="form-container">
        <h2>Daftar</h2>
        <form onSubmit={Pendaftaran}>
            <input name="name" placeholder="Nama Lengkap" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
            <button type="submit">Daftar</button>
            <p>Sudah punya akun? <a href="/login">Login</a></p>
        </form>
    </div>
);
};
export default Daftar;