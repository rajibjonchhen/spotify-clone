import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const Album = () => {

    const params = useParams()

    useEffect(()=>{
        const AlbumId = params.AlbumId
        console.log(AlbumId)
    },[])

    return(<>
        <h1>Album Page</h1>
        <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                          <div class="play-btn2 position-absolute"><i
                                  class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                          <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                          <div class="card-body mx-n3 mt-n2">
                              <p class="card-text">Some quick example text to build on the card title and make up
                                  the bulk of the card's content.</p>
                          </div>
                      </div>
    </>)
}

export default Album