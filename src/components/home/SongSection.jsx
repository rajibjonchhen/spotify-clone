import SongCard from './SongCard'
import {Row} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Loader from '../Loader'


const SongSection = (props) => {

    const[songs, setSongs]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [errMsg,setErrMsg]=useState('')
    
    useEffect(()=>{          
        loadAlbums(props.search)   
        },[props.search])
    
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
                        setIsLoading(false)
                    } else{
                        setErrMsg("Error is displaying")
                        setIsLoading(false)
                    }
                } catch (error) {
                    console.log(error)
                    setIsLoading(false)
                    setErrMsg(error)
                }
            }
    
   
    return(<Row > {/*className="row-cols-sm-2 row-cols-md-3 row-cols-lg-5" style={{flexWrap:'nowrap',overflow:'scroll'}}*/}
        {isLoading? (<Loader/>):(songs && songs.map((song,i)=> (
        <SongCard key={i} song={song}/>
        )))}
    
        </Row>)
}

export default SongSection