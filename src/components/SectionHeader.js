export default function SectionHeader({ keyword, title, paragraph }) {
    return (
        <div className="flex flex-col gap-8 justify-center items-center mt-28">
            <div className="p-3 rounded-md bg-[#F5F5F5] text-blue-500">
                {keyword}
            </div>
            <h1 className="text-4xl font-bold w-[70vw] text-[#1C2752] leading-[1.7em] text-center">
                {title}
            </h1>
            <p className="text-slate-700 w-[70vw] leading-[1.7em] text-center">
                {paragraph}
            </p>
        </div>
    );
}
