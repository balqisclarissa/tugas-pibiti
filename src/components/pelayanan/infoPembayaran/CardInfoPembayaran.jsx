function CardInfoPembayaran(props) {
    return (
        <div className="card-pembayaran">
            <h3>{props.tanggal}</h3>
            <p>{props.pengobatan}</p>
            <p>{props.harga}</p>
            <a>{props.status}</a>
        </div>
    )
}
export default CardInfoPembayaran;