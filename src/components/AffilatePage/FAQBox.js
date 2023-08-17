export default function FAQBox({ question, answer }) {
    return (
        <div className="w-full md:w-[40vw] flex flex-col gap-4">
            <h3 className="text-blue-500 text-2xl font-bold">{question}</h3>
            <p className="text-slate-700 leading-7">{answer}</p>
        </div>
    );
}
