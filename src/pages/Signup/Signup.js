import { withRouter, Link } from "react-router-dom";
import "./Signup.scss";
import { ButtonThree, Input } from "../../components/index";
import leftarrow from "../../assets/images/arrow-left.png";

export default withRouter(function Signup() {
    return (
        <>
            <main className="signup">
                <div className="signup__back-container">
                    <Link to="/8" className="signup__back-arrow">
                        <img
                            src={leftarrow}
                            alt="backarrow"
                            className="signup__back-arrow"
                        />
                    </Link>
                </div>

                <div className="signup__header">
                    Finish creating your account
                </div>

                <form className="signup__form">
                    <div className="signup__form-container">
                        <Input label={"First Name"} type={"text"} />
                        <Input label={"Last Name"} type={"text"} />
                        <Input label={"Email Address"} type={"email"} />
                        <Input label={"Password"} type={"password"} />
                    </div>
                </form>
                <Link to="/signupactive" className="signup__button">
                    <ButtonThree text={"CREATE ACCOUNT"} />
                </Link>
                <div className="signup__tos">
                    By creating an account, you agree to our{" "}
                    <b>Terms of Use Agreement </b>and{" "}
                    <b> Electronic Consent Agreement.</b>
                </div>
            </main>
        </>
    );
});
