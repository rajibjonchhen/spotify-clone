import {Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'
import PlaybarControl from '../playerControl/PlayerControl'

const MyLayout = (props) => {

    return(
        <Container fluid>
            <Row>
            <Col sm={1} md={2}className="bg-dark">
                <Sidebar search={props.search} setSearch={props.setSearch}/>
            </Col>
            <Col>
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