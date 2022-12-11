import { ButtonThree } from "../../components/index";
import { Link } from "react-router-dom";
import line3 from "../../assets/images/line3.png";
import "./Page7.scss";

export default function page7() {
    return (
        <>
            <main className="pageseven">
                <div className="pageseven__header">
                    <Link to="/9" className="pageseven__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <h1 className="pageseven__hero-header">
                    How much do you know about investing with trading cards?
                </h1>
                <div className="pageseven__button-container">
                    <Link to="/7active">
                        <ButtonThree text="NEW TO INVESTING" />
                    </Link>
                    <ButtonThree text="HAVE STARTED" />
                    <ButtonThree text="WHERE TO BEGIN" />
                    <ButtonThree text="EXPERT" />
                </div>
                <div className="pageseven__footer">
                    <div className="pageseven__next">Next</div>
                    <img
                        src={line3}
                        alt="thirdline"
                        className="pageseven__line"
                    />
                </div>
            </main>
        </>
    );
}
