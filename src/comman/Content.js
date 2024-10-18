import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Content() {
    return (
        <>
            <Row><Col><Aboutus /></Col></Row>
            <Row><Col><Features /></Col></Row>

        </>
    );
}

function Aboutus() {
    return (
        <>
            <Container fluid>
                <Card className="my-4 mx-2">
                    <Card.Img src="images/card.png" height='500px' width='100%' />
                    <Card.Header className="mt-2  px-3 fs-2">
                        About Shree Hari Investment
                        <Card.Subtitle className="py-1 ">Know More About Investment and Security Markets</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="mt-4 fs-5">
                            Shree Hari Investment is Owned by Mr Samir L Patel.<br /><br />Stock Market Services;<br />
                            We provide a Service of financial adviser,In our firm we have stockmarket broker Angle Broking LTD,In our firm we provide a service of broking in stockmarket we open clients Demate account free of cost and many Trade line Plans for free of cost with life time service.This content is for stock market.
                            <br /><br />
                            Insurance Service;<br />
                            In our Firm we provide Insurance Services of all types General-Insurance,Life-Insurance.Two Wheeler,Four Wheeler,Commercial vehical and all types of vehical Insurance Service is provide.Health-Insurance service like mediclaim is provided with best Premium.Office,Warehouse,House,Hotel and all Real-estate Insurance is also provided by our Firm.International Trip Insurance Service is also provide with low Premium and High benefits.This content is for Insurance Services By Shree Hari Investment. <br /><br />
                            Mutual Fund Service;<br />
                            We provide NJIndia broker for funds.In our Firm we have AMFI Register Person With NISM V-A clear series. We provide best funds with customer requirement SIP,SWP,LUMSUM all type of Knowledge is given to customer.This Content is for Mutul Funds.<br /><br />
                            <Button variant="dark">Know More About Investment</Button>



                        </Card.Text>


                    </Card.Body>
                </Card>

            </Container>

        </>
    );
}

function Features() {
    return (
        <>
        <Container fluid>
            
            <Row>
                <Col>
                <Card bg="" text="Dark" className="h-100">
                
                    
                    <Card.Header><h2>2500+</h2></Card.Header>
                    <Card.Body><h3>Active clients in Angleone.</h3></Card.Body>

                </Card>
                </Col>
                <Col><Card bg="" text="Dark" className="h-100">
                    <Card.Header><h2>₹17CR+</h2></Card.Header>
                    <Card.Body><h3>AUM in Mutual Funds.</h3></Card.Body>
                    </Card>
                </Col>
                <Col><Card bg="" text="Dark" className="h-100">
                    <Card.Header><h2>10+</h2></Card.Header>
                    <Card.Body><h3>Insurance Companies Services.</h3></Card.Body>
                    </Card>
                </Col>
                <Col><Card bg="" text="Dark" >
                    <Card.Header><h2>24×7</h2></Card.Header>
                    <Card.Body><h3>Service related to Insurance while claim.</h3></Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        </>
    );
}


