import SongCard from './SongCard'
import {Row} from 'react-bootstrap'


const SongSection = ({songs}) => {

    return(<>

    {songs && songs.map((song)=> (
        <SongCard key={song.id} song={song}/>
        ))}
        </>
)
}

export default SongSection