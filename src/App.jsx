  import Header from './components/header/Header.jsx';
  import Beranda from './components/beranda/Beranda.jsx';
  import Pelayanan from './components/pelayanan/Pelayanan.jsx';
  import Departemen from './components/departemen/Departemen.jsx';
  import Footer from './components/footer/Footer.jsx';
  import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import KetersediaanKamar from './components/pelayanan/ketersediaanKamar/KetersediaanKamar.jsx';
  import RiwayatPelayanan from './components/pelayanan/riwayatPelayanan/RiwayatPelayanan.jsx';
  import Daftar from './components/registrasi/Daftar.jsx';
  import Login from './components/registrasi/Login.jsx';
  import InfoPembayaran from './components/pelayanan/infoPembayaran/InfoPembayaran.jsx';
  import JadwalOperasi from './components/pelayanan/jadwalOperasi/JadwalOperasi.jsx';
  import PendaftaranOnline from './components/pelayanan/pendaftaranOnline/PendaftaranOnline.jsx';
  import InfoPendaftaran from './components/pelayanan/pendaftaranOnline/InfoPendaftaran.jsx';
  import JadwalObat from './components/pelayanan/jadwalObat/JadwalObat.jsx';

  function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <section id="beranda"><Beranda/></section>
                <section id="pelayanan"><Pelayanan/></section>
                <section id="departemen"><Departemen/></section>
                <section id="kontak"><Footer/></section>
              </main>
            }
          />
          <Route path="/ketersediaan" element={<KetersediaanKamar />}/>
          <Route path="/pembayaran" element={<InfoPembayaran/>}/>
          <Route path="/riwayat" element={<RiwayatPelayanan/>}/>
          <Route path="/operasi" element={<JadwalOperasi/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/daftar" element={<Daftar/>}/>
          <Route path="/pendaftaran" element={<PendaftaranOnline/>}/>
          <Route path="/infopendaftaran" element={<InfoPendaftaran/>}/>
          <Route path="/obat" element={<JadwalObat/>}/>
        </Routes>       
      </BrowserRouter>
    );
  }
  export default App;