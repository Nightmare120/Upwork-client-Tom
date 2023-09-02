export default function Paragraph({ children, italic }) {
    return (
        <p
            className={`text-slate-700 ${
                italic ? "italic" : "not-italic"
            } leading-7 text-lg`}
        >
            {children}
        </p>
    );
}

export function Heading({ children }) {
    return (
        <h3 className="text-2xl leading-9 text-[#1C2752]  font-bold ">
            {" "}
            {children}{" "}
        </h3>
    );
}

export function BlockQuote({ children }) {
    return (
        <div className="p-5 rounded-lg bg-blue-500 bg-opacity-10 leading-7 text-lg">
            {children}
        </div>
    );
}
