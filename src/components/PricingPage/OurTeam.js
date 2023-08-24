import StatsBox from "../HomePage/StatsBox";
import BottomRight from "../../images/ArrowTopRight.svg";
import slider from "../../images/slider_price.svg";
import person from "../../images/peoples.png";
import Range from "../RangeInput";
import { useState } from "react";

export default function OurTeam() {
    let [value, setValue] = useState("180");
    return (
        <div className="w-full lg:w-[40vw]">
            <p className="my-8">Our Team Members</p>
            <p className="w-1/2 text-3xl mb-4 font-bold text-blue-500">
                ${value}k
            </p>
            <Range setValue={setValue} min={"100"} max={"1000"} value={value} />
            <img src={person} className="my-8" alt="" />
            <div className="flex mt-4 gap-4">
                <StatsBox
                    title={"350+"}
                    detail={"Over 500 business powered with us"}
                />
                <StatsBox
                    title={"4.8"}
                    detail={"Rating on google play and app store"}
                />
            </div>
            <div className="hidden lg:flex ml-auto w-fit  items-start mt-14 justify-center gap-4">
                <p className={`italic text-lg text-slate-700`}>
                    {"Configure your products"}
                </p>
                <img
                    src={BottomRight}
                    style={{ transform: "scaleY(-1)" }}
                    className={"ml-auto mt-6"}
                    alt=""
                />
            </div>
        </div>
    );
}
