import SectionHeader from "../SectionHeader";
import Range from "../RangeInput";
import { useEffect, useState } from "react";
import HandleText from "../HandleText";
import { getReferrals } from "../../api/AffilateAPI";

export default function ReferralsSection() {
    let [value, setValue] = useState("5");
    let [heading, setHeading] = useState("");
    let [paragraph, setParagraph] = useState("");
    let [keyword, setKeyword] = useState("");
    let [bottom_para, setbottom_para] = useState("");
    let [base_value, setBaseValue] = useState(0);

    useEffect(() => {
        let fun = async () => {
            let Data = await getReferrals();
            let { heading, paragraph, keyword, base_value, bottom_para } =
                Data.data.attributes;
            setHeading(heading);
            setParagraph(paragraph);
            setKeyword(keyword);
            setBaseValue(base_value);
            setbottom_para(bottom_para);
        };

        fun();
    }, []);

    return (
        <div>
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={heading} />}
                paragraph={paragraph}
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
                    ${value * Number(base_value)}
                </p>
                <p className="text-slate-700">{bottom_para}</p>
            </div>
        </div>
    );
}
