import Button from "../Button";
import Keyword from "../Keyword";
import check from "../../images/check.svg";
// import Step3Detail from "../../images/Step3_detail.svg";
import ArrowTopLeft from "../../images/ArrowTopLeft.svg";
import ArrowTopRight from "../../images/ArrowTopRight.svg";

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
            } gap-8  justify-between flex-wrap lg:flex-nowrap`}
        >
            <div className="w-full relative md:w-[37vw]">
                <img src={image} alt="" />
                {/* {Number(stepNo) === 3 && (
                    <img
                        className="absolute -right-5 top-8 md:-right-16 md:top-16"
                        src={Step3Detail}
                        alt=""
                    />
                )} */}
                <div
                    className={`${reverse ? "mr-auto ml-5" : "ml-auto mr-5"}  ${
                        stepNo === 5 ? "mt-0" : "mt-12"
                    } w-fit `}
                >
                    <img
                        src={reverse ? ArrowTopRight : ArrowTopLeft}
                        className={`${reverse ? "ml-auto" : "mr-auto"}`}
                        alt=""
                    />
                    <p
                        className={`${
                            reverse ? "mr-16" : "ml-16"
                        } italic text-lg  text-slate-700 kalam`}
                    >
                        {stepTitle}
                    </p>
                </div>
            </div>
            <div className="flex w-full md:w-[37vw] flex-col gap-4 justify-start items-start">
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
