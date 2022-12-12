import { withRouter, Link } from "react-router-dom";
import "./Signupactive.scss";
import { ButtonOne, Input } from "../../components/index";
import leftarrow from "../../assets/images/arrow-left.png";

export default withRouter(function signupactive() {
    return (
        <>
            <main className="signupactive">
                <div className="signupactive__back-container">
                    <Link to="/8" className="signupactive__back-arrow">
                        <img
                            src={leftarrow}
                            alt="backarrow"
                            className="signupactive__back-arrow"
                        />
                    </Link>
                </div>

                <div className="signupactive__header">
                    Finish creating your account
                </div>

                <form className="signupactive__form">
                    <div className="signupactive__form-container">
                        <Input label={"First Name"} type={"text"} />
                        <Input label={"Last Name"} type={"text"} />
                        <Input label={"Email Address"} type={"email"} />
                        <Input label={"Password"} type={"password"} />
                    </div>
                </form>
                <Link to="/9" className="signupactive__button">
                    <ButtonOne text={"CREATE ACCOUNT"} />
                </Link>
                <div className="signupactive__tos">
                    By creating an account, you agree to our{" "}
                    <b>Terms of Use Agreement </b>and{" "}
                    <b> Electronic Consent Agreement.</b>
                </div>
            </main>
        </>
    );
});
