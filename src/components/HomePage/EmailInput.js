import Button from "../Button";

export default function EmailInput({ Botton_button_text }) {
    return (
        <div>
            <div className="mb-4 rounded-md flex items-center justify-between border-2 border-slate-200 p-2">
                <input
                    placeholder="Your business email"
                    className="w-3/6 outline-none"
                    type="text"
                />
                <span className="text-sm sm:text-base">
                    <Button
                        onClick={() => {
                            window.location =
                                "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                        }}
                    >
                        Get Started
                    </Button>
                </span>
            </div>
            <p className="text-slate-700 italic">{Botton_button_text}</p>
        </div>
    );
}
