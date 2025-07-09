import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrasi.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

const login = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("Anda belum memiliki akun");
        return;
    }

    if (email === user.email && password === user.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login berhasil!");
        navigate("/");
    } else {
        alert("Email atau password salah");
    }
};

return (
    <div className="form-container">
        <h2>Masuk</h2>
        <form onSubmit={login}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Masuk</button>
        </form>
    </div>
)
};
export default Login;