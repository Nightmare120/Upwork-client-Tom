export default function Input({ placeholder }) {
    return (
        <input
            placeholder={placeholder}
            className="rounded-md outline-none border-2 transition-all border-slate-200 p-3 focus:border-[#58AFFF]"
            type="text"
        />
    );
}
