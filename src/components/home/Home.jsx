import {Container, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap'
import SongSection from './SongSection'
import {Link} from 'react-router-dom'


const Home = ({search, setSearch}) => {
   
    const[singers, setSingers]=useState([])

    useEffect(()=>{
    setSingers([search])},[search])

    
    return ( <Container className='text-white' style={{backgroundColor:'rgb(37,68,106)'}} fluid>
            <Row className="justify-content-center">
                <span className="m-2 p-2" onClick={(e)=>setSearch('trending')}>TRENDING <hr/></span>
                <span className="m-2 p-2" onClick={(e)=>setSearch('podcast')}>PODCAST<hr/></span>
                <span className="m-2 p-2" onClick={(e)=>setSearch('mood')}>MOOD AND GENRES<hr/></span>
                <span className="m-2 p-2" onClick={(e)=>setSearch('new release')}>NEW RELEASE<hr/></span>
                <span className="m-2 p-2" onClick={(e)=>setSearch('discover')}>DISCOVER<hr/></span>
            </Row>
        {search &&
                         (
                        singers.map((search,i) =>(<div key={i}>
                        <p className="h1 text-left text-white">{search.toUpperCase()}</p>
                        <SongSection  i={i} search={search} />
                    </div>)))
    }
</Container>)
}

export default Home;
