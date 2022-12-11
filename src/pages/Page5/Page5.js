import { ButtonThree } from "../../components/index";
import { Link } from "react-router-dom";
import line1 from "../../assets/images/line1.png";
import "./Page5.scss";

export default function page5() {
    return (
        <>
            <main className="pagefive">
                <div className="pagefive__header">
                    <Link to="/9" className="pagefive__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <h1 className="pagefive__hero-header">What brought you here</h1>
                <h6 className="pagefive__hero-subheader">I want to...</h6>
                <div className="pagefive__button-container">
                    <ButtonThree text="Collect" />
                    <ButtonThree text="Sell" />
                    <Link to="/5active">
                        <ButtonThree text="Invest" />
                    </Link>
                    <ButtonThree text="Learn" />
                </div>
                <div className="pagefive__footer">
                    <div className="pagefive__next">Next</div>
                    <img
                        src={line1}
                        alt="firstline"
                        className="pagefive__line"
                    />
                </div>
            </main>
        </>
    );
}
