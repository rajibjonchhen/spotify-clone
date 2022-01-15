import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'

const SongCard = ({song}) => {

    return(
        <Col>
            <div>
                <Link to={"/Album/" + song.album.id}>
                <img src={song.album.cover} alt={song.title} />
                </Link>
            </div>
            <div>
                {song.title}
            </div>
        </Col>
    )
}

export default SongCard