import Button from "../Button";
import Keyword from "../Keyword";
import check from "../../images/check.svg";
import Step3Detail from "../../images/Step3_detail.svg";

export default function StepBox({
    image,
    stepNo,
    stepTitle,
    stepDesc,
    reverse,
    steps,
}) {
    return (
        <div
            className={`flex ${
                reverse ? "flex-row-reverse" : "flex-row"
            } gap-8 mt-16 mb-16 justify-between flex-wrap lg:flex-nowrap`}
        >
            <div className="w-full relative md:w-[40vw]">
                <img src={image} alt="" />
                {Number(stepNo) === 3 && (
                    <img
                        className="absolute -right-16 top-16"
                        src={Step3Detail}
                        alt=""
                    />
                )}
            </div>
            <div className="flex w-full md:w-[40vw] flex-col gap-4 justify-start items-start">
                <Keyword>Step {stepNo}</Keyword>
                <h3 className="text-2xl font-bold">{stepTitle}</h3>
                <p className="text-slate-700 ">{stepDesc}</p>
                {steps &&
                    steps.map((step, index) => (
                        <TickBox content={step} key={index} />
                    ))}

                <Button>Start Free Trial</Button>
            </div>
        </div>
    );
}

export function TickBox({ content }) {
    return (
        <div className="flex items-start gap-2 pt-2">
            <img src={check} className="mt-1" alt="" /> {content}
        </div>
    );
}
