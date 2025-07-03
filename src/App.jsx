import Header from './components/Header.jsx';
import Beranda from './components/Beranda.jsx';
import Pelayanan from './components/Pelayanan.jsx';
import Departemen from './components/Departemen.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  return (
    <>
      <main>
        <Header/>
        <Beranda/>
        <Pelayanan/>
        <Departemen/>
        <Footer/>
      </main>
    </>
  );
}
export default App;