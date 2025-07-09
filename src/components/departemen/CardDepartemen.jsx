import { Link, useNavigate } from 'react-router-dom';

function CardDepartemen({title, image, route}) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            alert("Silakan login atau daftar terlebih dahulu");
        }
    };

    return (
        <Link  to={`/${route || ''}`} className="card-departemen" onClick={handleClick}>
            <img src={image} alt={title} className="departemen-img"/>
            <h2>{title}</h2>
        </Link>
    );
}
export default CardDepartemen;