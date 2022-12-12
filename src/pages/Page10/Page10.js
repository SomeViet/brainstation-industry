import "./Page10.scss";
import { Link } from "react-router-dom";
import { ButtonOne } from "../../components/index";

export default function Page10() {
    return (
        <>
            <main className="pageten">
                <h1 className="pageten__header">
                    Thanks Jermaine. You’re now ready to start using ALT.{" "}
                </h1>

                <Link to="/11">
                    <ButtonOne text={"BEGIN INVESTING"} />
                </Link>
            </main>
        </>
    );
}
