import {useState, useEffect} from 'react'
import {Container, Col} from 'react-bootstrap'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
const Home = ({search}) => {
    


const[songs, setSongs]=useState([])

useEffect(()=>{       
    search? loadAlbums(search):loadAlbums("eminem")   
},[search])

const loadAlbums = async(singer)=>{
//    arrayOfSinger.map(singer=>{
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
            }
    } catch (error) {
        console.log(error)
    }
    
//    })
}




    return ( <>
    <Container className='text-white' style={{backgroundColor:'rgb(37,68,106)'}} fluid>
    {songs && (<>
        <Link to={"/Artist/" + songs[0].artist.id}>
            <p className="h1 text-left text-white">{search? search:"eminem"}</p>
        </Link>
            <SongSection songs={songs}/>
            <SongSection songs={songs}/>
            <SongSection songs={songs}/>
    </>
            )}
    </Container>
     
    </>)
}

export default Home;

