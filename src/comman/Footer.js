import { Button, Col, Container, Row } from "react-bootstrap";

export default function Foot() {
    return (
        <>
            <footer className="py-5 bg-dark text-white rounded-top mt-3" >
                <Container>
                    <Row>
                        <Col>
                        <h4>
                            Address of Office;
                        </h4>
                        4-Saraswati Complex,
                        Opp. Bank of Baroda,<br/>
                        Near Umiya Bhajipav,
                        Visnagar,
                        384315.<br/>
                        <Button className="mt-3 bg-white text-dark" >⚲ Location</Button>

                        </Col>
                        <Col>
                        <h3>Contact No-9998950881</h3>
                        <h5>Email-samirpatel950881@gmail.com</h5>
                        </Col>
                        <Col>
                        <img src="images/logo.jpg.PNG" width='120px' height='120px'/>
                        </Col>
                    </Row>

                </Container>
            </footer>
        </>
    );
}