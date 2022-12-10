import { Header } from "../../components/index";
import { withRouter } from "react-router-dom";

export default withRouter(function Home() {
    let pageNumber = 0;
    return (
        <>
            <Header pageNumber={pageNumber} />
            <div>This is the home page</div>
        </>
    );
});
