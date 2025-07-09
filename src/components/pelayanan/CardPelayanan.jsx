import { Link, useNavigate } from 'react-router-dom';

function CardPelayanan({title, route}) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            alert("Silakan login atau daftar terlebih dahulu");
        }
    };

    return (
        <Link to={route || '#'} className="card-pelayanan" onClick={handleClick}>
            <h2>{title}</h2>
        </Link>
    );
}
export default CardPelayanan;