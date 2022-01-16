
const Track = ({track,i}) => {
    return(
    <tr>
        <td className="p-2 m-2">{i+1}</td>
        <td className="p-2 m-2">{track.rank}</td>
        <td className="p-2 m-2">{track.title}</td>
        <td className="p-2 m-2">{track.duration}</td>
        <td className="p-2 m-2">{track.artist.tracklist}</td>
    </tr>
    )
}

export default Track