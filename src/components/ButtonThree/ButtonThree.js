import "./ButtonThree.scss";

export default function ButtonThree({ text }) {
    return (
        <>
            <button id="button-three" className="button-three">
                {text}
            </button>
        </>
    );
}
