import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import SongSection from '../home/SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
import './artist.css'
import TrackList from './TrackList'
const Artist = () => {
    
const [tracks,setTracks]=useState()
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
console.log(artist)

    return (<>
        { artist &&  (<>       
        <main className="container text-white " style={{backgroundColor:`rgb( ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`}}>
            <div className="row artist-page-bg" >
                <div className="col-12 p-0 m-0" style={{height:"200px"}}>
                <img src={artist.picture_xl} alt={artist.name} />
                </div>
            </div>

            <div className="relative-artist-info row mb-4 text-left">
                <div className="artist-info align-items-center">
                <span className="verified-icon"> <i className="bi bi-patch-check-fill"></i></span>
                <span>Verified artist</span>
                <h1>{artist.name}</h1>
                <span> <strong> 12,234,523,345 monthly listeners</strong> </span>
                </div>
            {/* <!-- second container for the artist song lists --> */}
          </div>
          <div className="row">
            <div className="col-12 g-0  main-list">

              <div className="artist-page-songLists container p-0 mx-0 g-0">

                <div className="row ">
                  <div className="col-12 col-md-3 mt-2 d-flex justify-content-start align-items-center p-0 ">
                    <span className="playbtn-1 ml-5"><i className="fas fa-play-circle"></i></span>
                    <span><button className="btn btn-outline-secondary text-white ml-3 ">Follow</button></span>
                    <span><a href=""> <i className=" bi bi-three-dots ml-3"></i></a> </span>
                  </div>
                </div>
                <div className="row justify-content-between ">
                  <div className="col-8 pl-n5">
                    <h3 className="ml-3">Popular</h3>
                    <table className="table table-borderless text-white ml-4">
                      <tbody>
                          {tracks && tracks.map(track=>
                     <TrackList track={track}/>)}
                    </tbody>
                    </table>




                  </div>
                  <div className="col-12 col-lg-3 text-left">
                    <h3>Artist Pick</h3>

                    <div className="d-flex ">
                      <img src={artist.picture}id="artist-pick-img" alt=""/>
                      <div className="m-2">
                        <div className=" d-flex align-items-center ">
                          <img className="w-100 post-by-img mr-1" src={artist.picture} alt=""/>
                          <span>Posted by</span>
                        </div>
                        <div> {artist.name} Best of<br/><strong>{artist.name}</strong></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="artist-page-cards container-fluid ">
                  <h2>Popular Series</h2>
                  <div className="row d-flex justify-content-around mt-2">
                    <div className="col-12 col-sm-6 col-lg-2  m-0 p-0 mt-2">
                      <div className="card">
                        <img src="/artist-page-pic/icon7.png" width="70px" className="card-img-top" alt="..."/>
                        <div className="playbtn-2">
                          <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="card-body">
                          <p className="card-text"> The Strange</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-2 m-0 p-0 mt-2">
                      <div className="card">
                        <img src="/artist-page-pic/icon4.png" width="70px" className="card-img-top" alt="..."/>
                        <div className="playbtn-2">
                          <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="card-body">
                          <p className="card-text"> Red Light</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-2 m-0 p-0  mt-2">
                      <div className="card">
                        <img src="/artist-page-pic/icon3.png" width="70px" className="card-img-top" alt="..."/>
                        <div className="playbtn-2">
                          <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="card-body">
                          <p className="card-text"> Indie mono</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-2  m-0 p-0 mt-2">
                      <div className="card">
                        <img src="/artist-page-pic/icon2.png" width="70px" className="card-img-top" alt="..."/>
                        <div className="playbtn-2">
                          <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="card-body">
                          <p className="card-text"> Soave</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-2  m-0 p-0 mt-2">
                      <div className="card">
                        <img src="/artist-page-pic/icon1.png" width="70px" className="card-img-top" alt="..."/>
                        <div className="playbtn-2">
                          <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="card-body">
                          <p className="card-text"> The C. M.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          
        </main>

        
        
        </>)}
    </>)
}

export default Artist;


