import check from "../../images/check.svg";
import Wrong from "../../images/Wrong.svg";
import Background from "../../images/PriceBoxBackground.svg";
import Button from "../Button";
import Image from "next/image";

export default function PriceBox({ data }) {
    return (
        <div
            style={{
                border:
                    data.type === "Professional"
                        ? "1px solid rgb(59 130 246)"
                        : "1px solid #F6F6F6",
            }}
            className="bg-[#F6F6F6] w-full lg:w-5/12 p-4 md:p-8 rounded-3xl flex flex-col gap-4"
        >
            <h3 className="text-2xl font-bold flex justify-between">
                {data.type}
                <div
                    className={`w-fit rounded-lg py-2 ${
                        data.type === "Professional" ? "visible" : "invisible"
                    } text-white text-base px-8 bg-blue-500`}
                >
                    Most Popular
                </div>
            </h3>
            <p className="text-slate-700">{data.work}</p>
            <p>{data.description}</p>
            <div
                style={{
                    backgroundImage: `url('${Background.src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="p-8 rounded-3xl flex flex-col text-white justify-center items-center gap-2 text-center"
            >
                <h3 className="text-3xl  font-bold">{data.scheme_price}</h3>
                <p className="w-1/2">{data.scheme_desc}</p>
            </div>

            <div className="w-full h-2 my-4 border-t-2"></div>

            {data.data &&
                data.data.map((e, index) => (
                    <TickBox content={e.text} key={index} wrong={e.wrong} />
                ))}

            <div className="w-full h-2 mt-auto"></div>
            <div className="w-full h-2 my-4 border-t-2"></div>

            <Button
                onClick={() => {
                    window.location =
                        "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                }}
            >
                Start 7-day free trial
            </Button>
        </div>
    );
}

export function TickBox({ content, wrong }) {
    return (
        <div className="flex items-start gap-2 pt-2">
            <Image src={wrong ? Wrong : check} className="mt-1" alt="" />{" "}
            {content}
        </div>
    );
}
