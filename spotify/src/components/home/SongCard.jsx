

import {Col} from 'react-bootstrap'

const SongCard = ({song}) => {

    return(
        <Col>
            <div>
                <img src={song.album.cover} alt={song.title} />
            </div>
            <div>
                {song.title}
            </div>
        </Col>
    )
}

export default SongCard