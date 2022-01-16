import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'
import { useEffect } from 'react'

const SongCard = ({song}) => {

   
    console.log(song)
    return(
        <Col>
        {song && (<div>
        <div>
            <Link to={"/Album/" + song.album.id}>
                <img src={song.album.cover} alt={song.album.title} />
            </Link>
        </div>
        <div>
            <p>{song.title}</p>
            <Link to={"/Artist/" + song.artist.id} >
                <p>{song.artist.name}</p>
            </Link>
            
        </div>
        </div>)}
    </Col>
    )
}

export default SongCard