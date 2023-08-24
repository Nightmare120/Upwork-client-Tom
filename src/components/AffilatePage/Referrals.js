import SectionHeader from "../SectionHeader";
import slider from "../../images/affilatepage-slider.svg";
import Range from "../RangeInput";
import { useState } from "react";

export default function ReferralsSection() {
    let [value, setValue] = useState("5");
    return (
        <div>
            <SectionHeader
                keyword={"Refferals"}
                title={"Win a Holiday!"}
                paragraph={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem ipsam molestiae distinctio repudiandae veritatis ipsum soluta accusamus delectus earum?"
                }
            />
            <div className="w-full mt-12 lg:w-1/2 m-auto text-center flex justify-centerr flex-col gap-8 ">
                <p className="text-3xl font-bold text-blue-500">
                    {value} Refferals
                </p>
                <Range
                    min={"1"}
                    max={"100"}
                    value={value}
                    setValue={setValue}
                />
                <p className=" ">Your Monthly Earnings</p>
                <p className="text-3xl font-bold text-blue-500">
                    ${value * 32}
                </p>
                <p className="text-slate-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    culpa tempora repudiandae officiis sed eum optio qui
                    asperiores quidem neque.
                </p>
            </div>
        </div>
    );
}
