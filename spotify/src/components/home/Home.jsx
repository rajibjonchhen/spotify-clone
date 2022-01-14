import {useState, useEffect} from 'react'
import {Col} from 'react-bootstrap'
const Home = () => {
    
const[arryOfSinger,SetArrayOfSinger] = useState( ["eminem","metallica","behemoth"])
const[songs, setSongs]=useState()
// useEffect(()=>{
    
//         loadAlbums()
   
// },[])


// const loadAlbums = function(arrayOfSinger){

//    arrayOfSinger.map(singer=>{

//        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + singer, {
//            "method": "GET",
//            "headers": {
//                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//                "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
//            }
//        .then(response => response.json()) 
//        .then(jsonData => {
//            console.log(jsonData);
//            if(jsonData){
//                 setSongs(jsonData.data)
//             }
//        })
//    })
//    })
   
// }




    return ( <>
      
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

