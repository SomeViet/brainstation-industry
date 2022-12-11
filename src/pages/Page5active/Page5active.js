import { ButtonThree, ButtonThreeActive } from "../../components/index";
import { Link } from "react-router-dom";
import line1 from "../../assets/images/line1.png";
import "./Page5active.scss";

export default function Page5active() {
    return (
        <>
            <main className="pagefive-active">
                <div className="pagefive-active__header">
                    <Link to="/9" className="pagefive-active__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <h1 className="pagefive-active__hero-header">
                    What brought you here
                </h1>
                <h6 className="pagefive-active__hero-subheader">
                    I want to...
                </h6>
                <div className="pagefive-active__button-container">
                    <ButtonThree text="Collect" />
                    <ButtonThree text="Sell" />
                    <ButtonThreeActive text="Invest" />
                    <ButtonThree text="Learn" />
                </div>
                <div className="pagefive-active__footer">
                    <Link to="/6" className="pagefive-active__next">
                        <div>Next</div>
                    </Link>
                    <img
                        src={line1}
                        alt="firstline"
                        className="pagefive-active__line"
                    />
                </div>
            </main>
        </>
    );
}
