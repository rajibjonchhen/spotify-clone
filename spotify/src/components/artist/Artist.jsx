import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'

const Artist = () => {

    const params = useParams()
    const [songs,setSongs]=useState({})
    const[isLoading,setIsLoading]=useState(true)
    const[errorHandle,setErrorHandle]=useState(false)


    useEffect(()=>{
        const ArtistId = params.ArtistId
       console.log("Artist Id",ArtistId)
        fetchSongs(ArtistId)
    },[])


    const fetchSongs = async(ArtistId) =>{
        
      try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + ArtistId , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
                }
            })

       let data = await response.json()
        if(response.ok){
        console.log(data)
            setSongs(data)
           setIsLoading(false)
        }
      } catch (error) {
          console.log(error)
          setIsLoading(false)

      }
    }

    return(<>
        <table className="table table-borderless text-white ml-4">
        <tbody>
           
    {/* {isLoading? (<Loader/>):(songs && songs.map((song)=>(
            <tr className="align-baseline"><td><div>1</div></td>
                <td><div> <img src={songs.picture} style={width:"50px"} alt=""/></div></td>
                <td><div>${song.title}</div></td>
                <td><div>1,222,432,345</div></td>
                <td><div> <a href=""><i className="far fa-heart"></i></a></div></td>
                <td><div> 3:24</div></td>
            </tr>
    )
            )
             )} */}
        </tbody>
        </table>
    </>)
}

export default Artist