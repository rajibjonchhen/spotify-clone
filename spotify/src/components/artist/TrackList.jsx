
import React from "react"



const TrackList = ({song}) => {


    return(
            <tr className="align-baseline"><td><div>1</div></td>
            <td><div> <img src={song.picture} style={{width:"50px"}} alt=""/></div></td>
            <td><div>${song.title}</div></td>
            <td><div>1,222,432,345</div></td>
            <td><div> <a href=""><i className="far fa-heart"></i></a></div></td>
            <td><div> 3:24</div></td>
        </tr>

    )
}

export default TrackList