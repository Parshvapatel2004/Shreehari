import { Button, Carousel } from "react-bootstrap";

export default function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="images/angle.JPG" height='450px' width='100%' />
                    <Carousel.Caption>
                        <h3>Angle Broking LTD</h3>
                        <a href="https://angel-one.onelink.me/Wjgr/ug44ffe7"><Button variant="primary">Open Free Demate</Button> </a>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/nj.PNG" height='450px' width='100%' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/aig.JPG" width='100%' height='450px' />
                    <Carousel.Caption>
                        <h3 className="text-light">
                            Tata Aig Motor,Life Insurance.
                            Service=24*7
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/niva.jpg.PNG" height='450px' width='100%' />
                </Carousel.Item>
            </Carousel>

        </>
    );
}
