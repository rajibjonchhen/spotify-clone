import {useState, useEffect} from 'react'
import {Container, Col} from 'react-bootstrap'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
const Home = ({search}) => {

const[songs, setSongs]=useState([])
const [artistId, setArtistId]=useState()
useEffect(()=>{       
    search? loadAlbums(search):loadAlbums("eminem")   
    },[search])

const loadAlbums = async(singer)=>{

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + singer, {
           "method": "GET",
           "headers": {
               "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
               "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
           }})
       let data = await response.json()
           if(response.ok){
                setSongs(data.data)
                setArtistId(data.data[0].artist)
            }
    } catch (error) {
        console.log(error)
    }

}

    return ( <>
    <Container className='text-white' style={{backgroundColor:'rgb(37,68,106)'}} fluid>
    {songs && (<>
        <Link to={"/Artist/" + artistId} >
            <p className="h1 text-left text-white">{search? search:"eminem"}</p>
        </Link>
            <SongSection songs={songs} />
    </>)}
    </Container>
     
    </>)
}

export default Home;

// album: {id: 119606, title: 'Curtain Call: The Hits', cover: 'https://api.deezer.com/album/119606/image', cover_small: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36…fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg', cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36…a865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg', …}
// artist: {id: 13, name: 'Eminem', link: 'https://www.deezer.com/artist/13', picture: 'https://api.deezer.com/artist/13/image', picture_small: 'https://e-cdns-images.dzcdn.net/images/artist/19cc…9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg', …}
// duration: 326
// explicit_content_cover: 0
// explicit_content_lyrics: 1
// explicit_lyrics: true
// id: 1109731
// link: "https://www.deezer.com/track/1109731"
// md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d"
// preview: "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
// rank: 952888
// readable: true
// title: "Lose Yourself (From \"8 Mile\" Soundtrack)"
// title_short: "Lose Yourself"
// title_version: "(From \"8 Mile\" Soundtrack)"
// type: "track"