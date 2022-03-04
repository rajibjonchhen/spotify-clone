import {Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'
import PlaybarControl from '../playerControl/PlayerControl'

const MyLayout = (props) => {

    return(
        <Container fluid>
            <Row className=''>
            <Col   lg={2} className="bg-dark">
                <Sidebar search={props.search} setSearch={props.setSearch}/>
            </Col>
            <Col lg={10} className="text-right" >
            {props.children}
            </Col>
            </Row>
            <Row>
            <PlaybarControl/>
            </Row>
        </Container>
    )
}

export default MyLayout