import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, } from 'react-bootstrap'
import Track from './Track'
const Album = () => {

const params = useParams()
const[album, setAlbum]=useState([])
const[tracks, setTracks]=useState([])

    useEffect(()=>{
        const AlbumId = params.AlbumId
        console.log(AlbumId)
        loadAlbums(AlbumId)
    },[])

    const loadAlbums = async(AlbumId)=>{
        try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + AlbumId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
            }})
        let data = await response.json()
        console.log(data.tracks.data[0])
        if(response.ok){
            setAlbum(data)
            setTracks(data.tracks.data)
                    
                }
        } catch (error) {
            console.log(error)
        }
    }

    return(<Container>
            <h1>Album Page</h1>
        <Row>{album && (<> <div className="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div className="play-btn2 position-absolute"><i
                                className="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src={album.cover} className="card-img-top pt-3" alt="cover"/>
                        <div className="card-body mx-n3 mt-n2">
                            <p className="card-text">{album.title}</p>
                        </div>
                    </div>
                    </>)
        }</Row>
        <Row>
                    <table>
                        <tbody>
                        {tracks.map((track,i)=>(<Track key={i} track={track} i={i}/>))}
                        </tbody>
                        </table>
        </Row>
    </Container>
    )
}

export default Album