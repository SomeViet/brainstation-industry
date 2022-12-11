import { withRouter } from "react-router-dom";
import "./Signup.scss";
import { Input } from "../../components/index";

export default withRouter(function Signup() {
    return (
        <>
            <main className="signup">
                <div className="signup__header">
                    Finish creating your account
                </div>

                <form className="signup__form">
                    <div className="signup__form-container">
                        <Input label={"First Name"} />
                        <Input label={"Last Name"} />
                        <Input label={"Email Address"} />
                        <Input label={"Password"} />
                    </div>
                </form>
            </main>
        </>
    );
});
