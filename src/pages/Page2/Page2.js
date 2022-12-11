import { Link } from "react-router-dom";
import headerLogo from "../../assets/images/headerlogo.png";
import mainImage from "../../assets/images/placeholder1.png";
import dot2 from "../../assets/images/dot2.png";
import "./Page2.scss";

export default function Page2() {
    return (
        <>
            <main className="pagetwo">
                <div className="pagetwo__header">
                    <Link to="/">
                        <img
                            src={headerLogo}
                            alt="headerlogo"
                            className="pagetwo__header-logo"
                        />
                    </Link>
                    <Link to="/9" className="pagetwo__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <img
                    src={mainImage}
                    alt="mainimage"
                    className="pagetwo__main-image"
                />
                <h1 className="pagetwo__section-header">VAULT</h1>
                <h3 className="pagetwo__sub-header">Lock in Value</h3>
                <div className="pagetwo__body">
                    The ALT Vault keeps your assets secure and enables
                    hassle-free selling. Keep track of your entire collection in
                    our storage for free.
                </div>

                <div className="pagetwo__footer">
                    <img src={dot2} alt="first dot" className="pagetwo__dots" />
                    <Link to="/3" className="pagetwo__next">
                        <div>Next</div>
                    </Link>
                </div>
            </main>
        </>
    );
}
