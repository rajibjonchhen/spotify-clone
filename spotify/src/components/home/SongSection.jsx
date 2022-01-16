import SongCard from './SongCard'
import {Row} from 'react-bootstrap'
import {useState, useEffect} from 'react'


const SongSection = (props) => {

    const[songs, setSongs]=useState([])
    
    useEffect(()=>{          
        loadAlbums(props.search)   
        },[])
    
    const loadAlbums = async(search)=>{
    
        
       console.log(search)
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search, {
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
            }
    
   
    return(<Row>
        
    {songs && songs.map((song,i)=> (
        <SongCard key={i} song={song}/>
        ))}
        </Row>)
}

export default SongSection