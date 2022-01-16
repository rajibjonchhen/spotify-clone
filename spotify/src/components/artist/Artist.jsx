import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import SongSection from '../home/SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'


const Artist = () => {
    
const[artist, setArtist]=useState([])
const params = useParams()

useEffect(()=>{    
   let ArtistId = params.ArtistId
    ArtistId? loadAlbums(ArtistId):loadAlbums("17")   
    console.log(ArtistId)
},[])

const loadAlbums = async(ArtistId)=>{
    try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + ArtistId, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
        }})
    let data = await response.json() 
    console.log(data)
    if(response.ok){
                setArtist(data)
            }
    } catch (error) {
        console.log(error)
    }
}

    return (<>
        { artist &&  (<>
        <p className="h1 card-text">{artist.name}</p>
        <img src={artist.picture_xl} className="card-img-top pt-3" alt="cover" fluid/>
        </>)}
    </>)
}

export default Artist;


