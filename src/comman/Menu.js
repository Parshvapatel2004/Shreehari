const { Navbar, Container, Nav } = require("react-bootstrap");

export default function Menu() {
    return (
        <>
            <Navbar expand='lg' data-bs-theme='dark' bg="dark">
                <Container>
                    <Navbar.Brand>
                        Shree Hari Investment
                        <img src="images/logo.jpg.PNG" height='50' width='50' alt="logo" className="mx-2 rounded-circle" />

                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#home">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
}