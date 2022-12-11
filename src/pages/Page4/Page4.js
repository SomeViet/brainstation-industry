import "./Page4.scss";
import { Link } from "react-router-dom";
import { ButtonOne } from "../../components/index";

export default function page4() {
    return (
        <>
            <main className="pagefour">
                <h1 className="pagefour__header">
                    Before we begin, tell us about yourself
                </h1>
                <Link to="/5">
                    <ButtonOne text={"CONTINUE"} />
                </Link>
            </main>
        </>
    );
}
