import "./Page8.scss";
import { Link } from "react-router-dom";
import { ButtonOne, ButtonTwo } from "../../components/index";

export default function page8() {
    return (
        <>
            <main className="pageeight">
                <h1 className="pageeight__header">
                    Let’s put what you’ve learned to this 1-2 minute test!
                </h1>
                <div className="pageeight__button1">
                    <ButtonOne text={"START"} />
                </div>
                <Link to="/signup" className="pageeight__button2">
                    <ButtonTwo text={"TRY LATER"} />
                </Link>
            </main>
        </>
    );
}
