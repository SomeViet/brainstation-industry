import { ButtonThree, ButtonThreeActive } from "../../components/index";
import { Link } from "react-router-dom";
import line3 from "../../assets/images/line3.png";
import "./Page7active.scss";

export default function Page7active() {
    return (
        <>
            <main className="pageseven-active">
                <div className="pageseven-active__header">
                    <Link to="/9" className="pageseven-active__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <h1 className="pageseven-active__hero-header">
                    How much do you know about investing with trading cards?
                </h1>
                <div className="pageseven-active__button-container">
                    <ButtonThreeActive text="NEW TO INVESTING" />
                    <ButtonThree text="HAVE STARTED" />
                    <ButtonThree text="WHERE TO BEGIN" />
                    <ButtonThree text="EXPERT" />
                </div>
                <div className="pageseven-active__footer">
                    <Link to="/8" className="pageseven-active__next">
                        <div>Next</div>
                    </Link>
                    <img
                        src={line3}
                        alt="thirdline"
                        className="pageseven-active__line"
                    />
                </div>
            </main>
        </>
    );
}
