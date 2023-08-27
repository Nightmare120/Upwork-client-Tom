export default function SectionHeader({
    keyword,
    title,
    paragraph,
    shouldNotTakeTopMargin,
    shouldParaHasShortWidth,
    notShowKeyword,
}) {
    return (
        <div
            className={`flex flex-col gap-8 justify-center items-center  ${
                shouldNotTakeTopMargin ? "" : "mt-36"
            } `}
        >
            <div
                style={{
                    display: notShowKeyword ? "none" : "block",
                }}
                className="p-3 rounded-md bg-[#F5F5F5] text-blue-500"
            >
                {keyword}
            </div>
            <h1 className="text-3xl leading-[1.3em] lg:text-4xl font-bold w-full lg:w-[70%] text-[#1C2752] lg:leading-[1.7em] text-center">
                {title}
            </h1>
            <p
                className={`text-slate-700 w-full ${
                    shouldParaHasShortWidth ? "lg:w-[60%]" : "lg:w-[70%]"
                }  leading-[1.7em] text-center`}
            >
                {paragraph}
            </p>
        </div>
    );
}
