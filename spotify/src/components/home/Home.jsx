import {Container, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
const Home = ({search}) => {
    console.log(search)
    const[singers, setSingers]=useState([])

    useEffect(()=>{
    search.length>3? setSingers([search]):setSingers(["eminem","queen","taylor","Nirvana"])
    },[])

    
    return ( <Container className='text-white' style={{backgroundColor:'rgb(37,68,106)'}} fluid>

        {!search? 
                         (
                        singers.map((search,i) =>(<div key={i}>
                        <p className="h1 text-left text-white">{search.toUpperCase()}</p>
                        <SongSection  i={i} search={search} />
                    </div>))):
        ( <div>
                         <p className="h1 text-left text-white">Search Results</p>
                         <SongSection   search={search} /> </div>) 
    }
</Container>)
}

export default Home;
