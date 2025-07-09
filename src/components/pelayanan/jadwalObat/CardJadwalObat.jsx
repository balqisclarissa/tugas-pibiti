function CardJadwalObat(props) {
    return (
        <div className="card-jadwal">
            <p>{props.obat}</p>
            <p>{props.jadwal}</p>
            <p>{props.waktu}</p>
            <p>{props.dosis}</p>
        </div>
    )
}
export default CardJadwalObat;