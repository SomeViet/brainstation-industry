import { Header } from "../../components/index";
import { withRouter } from "react-router-dom";

export default withRouter(function page4(props) {
    let data = props.match.path;
    let pageNumber = parseInt(data.slice(-1));

    return (
        <>
            <Header pageNumber={pageNumber} />
            <div>This is page4</div>
        </>
    );
});
