// import "./ToggleButton.css";

export default function ToggleButton({ value, setValue }) {
    return (
        <span>
            <label className="switch">
                <input
                    value={!value}
                    onChange={(e) => {
                        setValue(!e.target.checked);
                    }}
                    type="checkbox"
                />
                <span className="slider round"></span>
            </label>
        </span>
    );
}
