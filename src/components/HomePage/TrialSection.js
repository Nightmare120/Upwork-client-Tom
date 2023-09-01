import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { TickBox } from "./StepBox";
import HandleText from "../HandleText";
import { getHomePageTrialSection } from "../../api/HomePageAPI";

export default function TrialSection(props) {
    let [heading, setHeading] = useState(props.heading);
    let [paragraph, setParagraph] = useState(props.paragraph);
    let [data, setData] = useState(props.data);
    let [Botton_button_line, setButtonLine] = useState(
        props.Botton_button_line
    );

    useEffect(() => {
        let fun = async () => {
            let Data = await getHomePageTrialSection();
            let { heading, paragraph, data, Botton_button_line } =
                Data.data.attributes;
            setHeading(heading);
            setParagraph(paragraph);
            setData(data);
            setButtonLine(Botton_button_line);
        };

        fun();
    }, []);

    return (
        <div
            className={`flex gap-8 mt-36 mb-16 justify-between flex-wrap md:flex-nowrap`}
        >
            <div className="flex w-full md:w-[40vw] flex-col gap-4 justify-start items-start">
                <h3 className="text-4xl font-bold  text-[#1C2752] leading-[1.7em]">
                    <HandleText text={heading} />
                </h3>
                <p className="text-slate-700 ">{paragraph} </p>

                {data &&
                    data.map((e, index) => <TickBox key={index} content={e} />)}
            </div>

            <div className="w-full md:w-[30vw] flex flex-col gap-4">
                <p className="text-[#384268] font-bold  ">Website URL</p>
                <Input placeholder={"Example.com"} />
                <p className="text-[#384268] font-bold  ">Email</p>
                <Input placeholder={"Your business email"} />
                <Button
                    onClick={() => {
                        window.location =
                            "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                    }}
                >
                    Start Free Trial
                </Button>
                <p
                    className="text-center 
underline text-slate-700 "
                >
                    {Botton_button_line}
                </p>
            </div>
        </div>
    );
}
