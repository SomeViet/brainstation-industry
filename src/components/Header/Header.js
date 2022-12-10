import { Link } from "react-router-dom";
import "../Header/Header.scss";

export default function Header({ pageNumber }) {
    let prevPageNumber = pageNumber - 1;

    if (prevPageNumber === 0) {
        prevPageNumber = "";
    }

    let nextPageNumber = pageNumber + 1;

    console.log(prevPageNumber);
    return (
        <>
            <header className="header">
                <Link
                    to={"/" + prevPageNumber}
                    className={
                        prevPageNumber === -1
                            ? "header__link--hidden"
                            : "header__link"
                    }
                >
                    <div>Prev</div>
                </Link>

                <Link to={"/" + nextPageNumber} className="header__link">
                    <div>Next</div>
                </Link>
            </header>
        </>
    );
}
