import "./Input.scss";

export default function Input({ label }) {
    return (
        <>
            <div className="input">
                <label className="input__label">{label} </label>
                <input className="input__field" />
            </div>
        </>
    );
}
