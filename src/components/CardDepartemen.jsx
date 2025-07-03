function CardDepartemen({title, image}) {
    return (
        <div className="card-departemen">
            <img src={image} alt={title} className="departemen-img"/>
            <h2>{title}</h2>
        </div>
    );
}
export default CardDepartemen;