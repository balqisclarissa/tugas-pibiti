function CardKetersediaanKamar(props) {
    return (
        <div className="card-ketersediaan">
            <h3>{props.nomor}</h3>
            <p>{props.jenis}</p>
            <p>{props.status}</p>
            <p>{props.kapasitas}</p>
        </div>
    )
}
export default CardKetersediaanKamar;