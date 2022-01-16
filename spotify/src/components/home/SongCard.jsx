import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'
import { useEffect } from 'react'

const SongCard = ({song}) => {

   
    return(
        <Col>
        {song && (<div>
            console.log(song)
        <div>
            <Link to={"/Album/" + song.album.id}>
            <img src={song.album.cover} alt={song.album.title} />
            </Link>
        </div>
        <div>
            <span>{song.title}</span>
            <Link to={"/Artist/" + song.artist.id} >
            <span>ghjk</span>
            </Link>
            
        </div>
        </div>)}
    </Col>
    )
}

export default SongCard