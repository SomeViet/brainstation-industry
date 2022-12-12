import "./Page9.scss";
import { Link } from "react-router-dom";
import { ButtonOne } from "../../components/index";

export default function page9() {
    return (
        <>
            <main className="pagenine">
                <h1 className="pagenine__header">Verify Your Identity</h1>
                <div className="pagenine__body">
                    You will need to provide your Social Insurance Number (SIN)
                    for us to maintain user privacy and regulations purposes.
                    For further details or questions, please reach out to{" "}
                    <b>support@alt.xyz</b>
                </div>
                <Link to="/10">
                    <ButtonOne text={"CONTINUE"} />
                </Link>
            </main>
        </>
    );
}
