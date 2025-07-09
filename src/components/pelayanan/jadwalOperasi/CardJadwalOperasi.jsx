function CardJadwalOperasi(props) {
    return (
        <div className="card-operasi">
            <p>{props.tanggal}</p>
            <p>{props.waktu}</p>
            <p>{props.dokter}</p>
            <p>{props.jenis}</p>
            <p>{props.status}</p>
        </div>
    )
}
export default CardJadwalOperasi;
