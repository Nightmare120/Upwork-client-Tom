import Button from "../Button";
import Keyword from "../Keyword";
import check from "../../images/check.svg";
import ArrowTopRight from "../../images/ArrowTopRight.svg";
import ArrowTopLeft from "../../images/ArrowTopLeft.svg";
import ReferralsSection from "./Referrals";
import Image from "next/image";

export default function StepBox({
    image,
    stepNo,
    stepTitle,
    stepDesc,
    reverse,
    steps,
}) {
    console.log("imag fromm aff", image);
    return (
        <>
            <div
                className={`flex ${
                    reverse ? "flex-row-reverse" : "flex-row"
                } gap-8 mt-36 mb-36 justify-between flex-wrap lg:flex-nowrap`}
            >
                <div
                    className={`w-full relative ${
                        stepNo < 3 ? "md:w-[25vw] m-auto" : "md:w-[37vw]"
                    }`}
                >
                    <img src={image} alt="" />
                    <div
                        style={{
                            display: Number(stepNo) > 2 ? "block" : "none",
                        }}
                        className={`${
                            reverse ? "mr-auto ml-5" : "ml-auto mr-5"
                        }  mt-12 w-fit `}
                    >
                        <Image
                            width={`100%`}
                            height={"100%"}
                            src={reverse ? ArrowTopRight : ArrowTopLeft}
                            className={`${reverse ? "ml-auto" : "mr-auto"}`}
                            alt=""
                        />
                        <p
                            className={`${
                                reverse ? "mr-16" : "ml-16"
                            } italic text-lg text-slate-700 kalam`}
                        >
                            {stepTitle}
                        </p>
                    </div>
                </div>
                <div className="flex w-full md:w-[37vw] flex-col gap-4 justify-start items-start">
                    <span
                        style={{
                            display: stepNo >= 3 ? "none" : "inline-block",
                        }}
                        className="font-bold"
                    >
                        <Keyword>Step {stepNo}</Keyword>
                    </span>
                    <h3 className="text-2xl text-[#060C3C] font-bold">
                        {stepTitle}
                    </h3>
                    <p className="text-slate-700 ">{stepDesc}</p>
                    {steps &&
                        steps.map((step, index) => (
                            <TickBox content={step} key={index} />
                        ))}

                    <Button
                        onClick={() => {
                            window.location =
                                "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                        }}
                    >
                        Start Free Trial
                    </Button>
                </div>
            </div>
            {stepNo === "2" && <ReferralsSection />}{" "}
        </>
    );
}

export function TickBox({ content }) {
    return (
        <div className="flex items-start gap-2 pt-2">
            <Image src={check} className="mt-1" alt="" /> {content}
        </div>
    );
}
