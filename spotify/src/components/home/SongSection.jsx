import SongCard from './SongCard'
import {Row} from 'react-bootstrap'


const SongSection = ({songs}) => {

    return(
       
    <Row>
    {songs &&
    songs.map(song=>(
        <SongCard key={song.id} song={song}/>))}
</Row>
)
}

export default SongSection