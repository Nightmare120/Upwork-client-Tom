import { useEffect, useState } from "react";
import { getAdvantageSection } from "../../api/HomePageAPI";
import HandleText from "../HandleText";
import pattern from "../../images/Pattern.svg";
import Image from "next/image";

export default function WhatYouNeedSection(props) {
    let [heading, setHeading] = useState(props.heading);
    let [description, setDescription] = useState(props.description);
    let [data, setData] = useState(props.data);
    useEffect(() => {
        let fun = async () => {
            let Data = await getAdvantageSection();
            let { heading, description, data } = Data.data.attributes;
            setHeading(heading);
            setDescription(description);
            setData(data);
        };

        fun();
    }, []);
    return (
        <div className="flex flex-col mt-16 m-auto justify-center items-center ">
            <div className="flex gap-8 justify-center items-center">
                <div className="flex justify-center items-center pt-40 box-border">
                    {" "}
                    <Image
                        src={pattern}
                        className="hidden md:block lg:block"
                        style={{ transform: "scaleX(-1)" }}
                        alt=""
                    />{" "}
                </div>
                <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-4xl font-bold w-[70vw] md:w-[40vw] text-[#1C2752] leading-[1.7em] text-center">
                        <HandleText text={heading} />
                    </h1>
                    <p className="text-slate-700 w-[70vw] md:w-[30vw] leading-[1.7em] text-center">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center items-center pt-40 box-border">
                    {" "}
                    <Image
                        src={pattern}
                        className="hidden md:block"
                        alt=""
                    />{" "}
                </div>
            </div>
            <div className="rounded-md bg-[#F5F5F5] flex p-16 gap-16 flex-wrap md:flex-nowrap">
                {data &&
                    data.map((e, index) => (
                        <StatBox title={e.data} para={e.desc} key={index} />
                    ))}
            </div>
        </div>
    );
}

function StatBox({ title, para }) {
    return (
        <div className="flex flex-col gap-7 text-center w-full md:w-[29%]">
            <h3 className=" relative font-bold text-4xl text-center text-blue-500">
                <div className="w-fit m-auto ">
                    {title}{" "}
                    <div className="absolute w-[25%]  h-1  mt-2 bg-gradient-to-r to-[#4563FF] from-[#58AFFF]"></div>
                </div>
            </h3>
            <p className="text-slate-700 text-center">{para}</p>
        </div>
    );
}
