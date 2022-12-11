import { withRouter, Link } from "react-router-dom";
import headerLogo from "../../assets/images/headerlogo.png";
import mainImage from "../../assets/images/placeholder1.png";
import dot3 from "../../assets/images/dot3.png";
import "./Page3.scss";

export default withRouter(function Page3() {
    return (
        <>
            <main className="pagethree">
                <div className="pagethree__header">
                    <Link to="/">
                        <img
                            src={headerLogo}
                            alt="headerlogo"
                            className="pagethree__header-logo"
                        />
                    </Link>
                    <Link to="/7" className="pagethree__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <img
                    src={mainImage}
                    alt="mainimage"
                    className="pagethree__main-image"
                />
                <h1 className="pagethree__section-header">BORROW TO INVEST</h1>
                <h3 className="pagethree__sub-header">
                    Borrow cash without selling your cards.
                </h3>
                <div className="pagethree__body">
                    ALT Advance lets you borrow cash against your assets without
                    having to let them go. Consider protecting your wealth
                    portfolio from market downside with tangible alternative
                    assets.
                </div>

                <div className="pagethree__footer">
                    <img
                        src={dot3}
                        alt="first dot"
                        className="pagethree__dots"
                    />
                    <Link to="/4" className="pagethree__next">
                        <div>Next</div>
                    </Link>
                </div>
            </main>
        </>
    );
});
