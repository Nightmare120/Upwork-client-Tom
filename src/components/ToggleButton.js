import "./ToggleButton.css";

export default function ToggleButton() {
    return (
        <span>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </span>
    );
}
