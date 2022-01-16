import {Container, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'
import Loader from '../Loader'
const Home = ({search}) => {

    const[singers, setSingers]=useState([])

    useEffect(()=>{
    {search? setSingers([{search}]):setSingers(["eminem","queen","taylor","Nirvana"])}
    },[])


    return ( 
    <Container className='text-white' style={{backgroundColor:'rgb(37,68,106)'}} fluid>{
        singers.map((search,i) =>(<div key={i}>
        <p className="h1 text-left text-white">{search.toUpperCase()}</p>
        <SongSection  i={i} search={search} />
    </div>)    
    )}
}</Container>
     
    )
}

export default Home;
