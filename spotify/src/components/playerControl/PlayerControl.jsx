import './playerControl.css'
import {Container} from 'react-bootstrap'

const PlayerControl = () => {

    return(
        <>
            <Container fluid>
                    <div className="play-bar mb-n4 px-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-12 m-0 m-md-0 col-lg-3 align-items-center d-inline-block play-hidden">
                                <div className="d-flex justify-content-around align-items-center">
                                    <img src="https://picsum.photos/50/50" style={{width:'55px'}} alt=""/>
                                    <div className="d-inline-block">
                                        <p className="p-0 m-0">We Will Rock You <br/> <small>Queen</small></p>
                                    </div>
                                    <i className="far fa-heart"></i>
                                    <i className="bi bi-pip"></i>
                                </div>
                            </div>

                            <div className="col-12 col-12 m-0 pb-n5 m-md-0 col-lg-7 play-hidden-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <i className="fas fa-random mx-2"></i>
                                    <i className="fas fa-step-backward mx-2"></i>
                                    <i className="bi bi-play-circle-fill mx-2 play-bottom"></i>
                                    <i className="fas fa-step-forward mx-2"></i>
                                    <i className="fas fa-retweet mx-2"></i>
                                </div>
                                <div className="d-flex justify-content-center mt-n2 align-items-center">
                                    <span className="mr-2" style={{fontSize: "14px"}}>3:45</span>
                                   <input type='range' id='playTime'/>
                                    <span className="ml-2" style={{fontSize: "14px"}}>4:01</span>
                                </div>
                            </div>

                            <div className="col-12 m-0 m-md-0 col-lg-2 d-flex justify-content-around align-items-center play-hidden">
                                <i className="bi bi-mic"></i>
                                <i className="bi bi-card-text"></i>
                                <i className="bi bi-pc-display"></i>
                                <i className="bi bi-volume-up"></i>
                                <span className="volume">
                                <input type='range' id='volume'/>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
        </>
    )
}

export default PlayerControl