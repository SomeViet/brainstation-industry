import "./Input.scss";

export default function Input({ label, type }) {
    return (
        <>
            <div className="input">
                <label className="input__label">{label} </label>
                <input className="input__field" type={type} />
            </div>
        </>
    );
}
