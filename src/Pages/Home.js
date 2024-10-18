import Content from "../comman/Content";
import Menu from "../comman/Menu";
import Slider from "../comman/Slider";
import Foot from "../comman/Footer"


export default function Home() {
    return (
        <>
            <Menu />
            <Slider />
            <Content />
            <Foot/>
        </>
    );
}