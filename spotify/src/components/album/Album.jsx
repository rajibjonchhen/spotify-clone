import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, } from 'react-bootstrap'

const Album = () => {

    const params = useParams()

    useEffect(()=>{
        const AlbumId = params.AlbumId
        console.log(AlbumId)
    },[])


    return(<Container>
            <h1>Album Page</h1>
        <Row>

            <div className="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div className="play-btn2 position-absolute"><i
                                className="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" className="card-img-top pt-3" alt="cover"/>
                        <div className="card-body mx-n3 mt-n2">
                            <p className="card-text">bulk of the card's content.</p>
                        </div>
                    </div>
        </Row>
    </Container>
    )
}

export default Album