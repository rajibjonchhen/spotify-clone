import {Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'


const MyLayout = () => {

    return(
        <Container fluid>
            <Row>
            <Col sm={1} md={2}className="bg-dark">
                <Sidebar/>
            </Col>
            <Col>
            
            </Col>
            </Row>
        </Container>
    )
}

export default MyLayout