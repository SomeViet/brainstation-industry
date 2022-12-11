import { withRouter, Link } from "react-router-dom";
import headerLogo from "../../assets/images/headerlogo.png";
import mainImage from "../../assets/images/placeholder1.png";
import dot1 from "../../assets/images/dot1.png";
import "./Page1.scss";

export default withRouter(function Page1() {
    return (
        <>
            <main className="pageone">
                <div className="pageone__header">
                    <Link to="/">
                        <img
                            src={headerLogo}
                            alt="headerlogo"
                            className="pageone__header-logo"
                        />
                    </Link>
                    <Link to="/7" className="pageone__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <img
                    src={mainImage}
                    alt="mainimage"
                    className="pageone__main-image"
                />
                <h1 className="pageone__section-header">BUY & SELL</h1>
                <h3 className="pageone__sub-header">
                    PSA-graded Trading Cards.
                </h3>
                <div className="pageone__body">
                    Get exposure in a growing $15 billion market. Purchase cards
                    on the Fixed Price Marketplace or bi-weekly Liquid Auctions.
                </div>
                <div className="pageone__body">
                    Maximize your card sales through reaching a global audience
                    of passionate collectors and real-time pricing data with
                    transaction history.
                </div>
                <div className="pageone__footer">
                    <img src={dot1} alt="first dot" className="pageone__dots" />
                    <Link to="/2" className="pageone__next">
                        <div>Next</div>
                    </Link>
                </div>
            </main>
        </>
    );
});
