import {useState, useEffect} from 'react'
import {Container, Col} from 'react-bootstrap'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'
 
const Home = ({search}) => {
    


const[songs, setSongs]=useState()


useEffect(()=>{    
   
    search? loadAlbums(search):loadAlbums("eminem")   

},[search])


const loadAlbums = async(singer)=>{

//    arrayOfSinger.map(singer=>{
    try {
        console.log('loadAlbum is called ')
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + singer, {
           "method": "GET",
           "headers": {
               "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
               "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
           }})
       let data = await response.json()
     
           console.log("response", response);
           console.log("jsonData" , data.data);
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
    </>
            )}
    </Container>
      {/* {songs?    (songs.slice(0,6).map(song => {
                        <Col className="col-12 col-sm-6 col-md-4">
                            <div class="small-card align-items-center position-relative">
                            <a href="/album-page.html?id=${song.album.id}">
                            <div class="play-btn position-absolute"><i
                                    class="bi bi-play-circle-fill play-circle position-relative"></i></div>
                                    <img src="${song.album.cover_small}" class="small-card-img ml-n3" alt="cover"/>
                            <strong class="text-white mx-2">${song.album.title}</strong>
                            </a>
                            <a href="/artist-page.html?id=${song.artist.id}">${song.artist.name}</a>
                            </div>
                        </Col>
         })):(<h1>Loading</h1>)
    } */}
    </>)
}

export default Home;

