import HomeImage from "../../assets/images/homeimage.svg";
import "./Home.scss";
import { Link } from "react-router-dom";
import { ButtonOne, ButtonTwo } from "../../components/index";

export default function Home() {
    return (
        <>
            <main className="home">
                <img
                    src={HomeImage}
                    alt="homeimagelogo"
                    className="home__logo"
                />
                <h1 className="home__header">Buy & Sell Cards</h1>
                <Link to="/1" className="home__button1">
                    <ButtonOne text="GET STARTED" />
                </Link>
                <Link to="/11" className="home__button2">
                    <ButtonTwo text="ALREADY A MEMBER? SIGN IN" />
                </Link>
            </main>
        </>
    );
}
