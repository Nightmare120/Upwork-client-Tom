// import "./Range.css";

export default function Range({ min, max, value, setValue }) {
    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                oninput="rangeValue.innerText = this.value"
                onInput={(e) => {
                    setValue(`${e.target.value}`);
                }}
            />
        </div>
    );
}
