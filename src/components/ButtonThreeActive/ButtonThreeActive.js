import "./ButtonThreeActive.scss";

export default function ButtonThreeActive({ text }) {
    return (
        <>
            <button id="button-three" className="button-three-active">
                {text}
            </button>
        </>
    );
}
