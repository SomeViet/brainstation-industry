import { Link } from "react-router-dom";
import line2 from "../../assets/images/line2.png";
import "./Page6.scss";
import temp from "../../assets/images/placeholder2.png";

export default function Page6() {
    return (
        <>
            <main className="pagesix">
                <div className="pagesix__header">
                    <Link to="/9" className="pagesix__header-skip">
                        <div>Skip</div>
                    </Link>
                </div>
                <h1 className="pagesix__hero-header">
                    What kind of collectible trading cards do you have?
                </h1>
                <h6 className="pagesix__hero-subheader">
                    Select all that apply
                </h6>
                <div className="pagesix__image-container">
                    <img
                        src={temp}
                        alt="trading card"
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                    <img
                        src={temp}
                        alt="trading card "
                        className="pagesix__image-card"
                    />
                </div>
                <div className="pagesix__footer">
                    <Link to="/7" className="pagesix__next">
                        <div>Next</div>
                    </Link>
                    <img
                        src={line2}
                        alt="secondline"
                        className="pagesix__line"
                    />
                </div>
            </main>
        </>
    );
}
