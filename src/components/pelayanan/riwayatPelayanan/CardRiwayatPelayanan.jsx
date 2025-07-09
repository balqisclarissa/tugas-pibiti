function CardRiwayatPelayanan(props) {
    return (
        <div className="card-riwayat">
            <h3>{props.departemen}</h3>
            <a>{props.diagnosa}</a>
            <p>{props.jenisDiagnosa}</p>
            <a>{props.pengobatan}</a>
        </div>
    )
}
export default CardRiwayatPelayanan;