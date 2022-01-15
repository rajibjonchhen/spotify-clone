import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, } from 'react-bootstrap'
import SongSection from '../home/SongSection'

const Album = () => {

const params = useParams()
const[songs, setSongs]=useState([])


    useEffect(()=>{
        const AlbumId = params.AlbumId
        console.log(AlbumId)
        loadAlbums(AlbumId)
    },[])


    const loadAlbums = async(AlbumId)=>{
        try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + AlbumId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
            }})
        let data = await response.json()
        if(response.ok){
                    setSongs(data)
                }
        } catch (error) {
            console.log(error)
        }
    }


    return(<Container>
            <h1>Album Page</h1>
        <Row>{
            songs.map(song => (
                <div className="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div className="play-btn2 position-absolute"><i
                                className="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src={song.album.cover_big} className="card-img-top pt-3" alt="cover"/>
                        <div className="card-body mx-n3 mt-n2">
                            <p className="card-text">{song.title}</p>
                        </div>
                    </div>
                                ))
        }</Row>
    </Container>
    )
}

export default Album