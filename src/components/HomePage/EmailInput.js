import Button from "../Button";

export default function EmailInput() {
    return (
        <div>
            <div className="mb-4 rounded-md flex items-center justify-between border-2 border-slate-200 p-2">
                <input
                    placeholder="Your Business Email."
                    className="w-3/6 outline-none"
                    type="text"
                />
                <span className="text-sm sm:text-base">
                    <Button>Get Started</Button>
                </span>
            </div>
            <p className="text-slate-700 italic">
                *we will not disseminate your email and so you avoid spam
            </p>
        </div>
    );
}
