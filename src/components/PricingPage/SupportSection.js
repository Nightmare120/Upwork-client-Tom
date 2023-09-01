import SectionHeader from "../SectionHeader";
import { useEffect, useState } from "react";
import { getSupportSection } from "../../api/PricingAPI";
import Image from "next/image";

export default function SupportSection() {
    let [heading, setHeading] = useState("");
    let [keyword, setKeyword] = useState("");
    let [data, setData] = useState(null);
    let [description, setDescription] = useState("");

    useEffect(() => {
        let fun = async () => {
            let Data = await getSupportSection();
            let { heading, keyword, description, data } = Data.data.attributes;
            setHeading(heading);
            setKeyword(keyword);
            setDescription(description);
            console.log(Data, data);
            setData(data);
        };
        fun();
    }, []);

    return (
        <div className="mb-24">
            <SectionHeader
                title={heading}
                paragraph={description}
                keyword={keyword}
            />
            <div className="mt-24 flex gap-8 flex-wrap justify-center">
                {data && data.map((e, index) => <Box key={index} data={e} />)}
            </div>
        </div>
    );
}

function Box({ data }) {
    return (
        <div
            style={{}}
            className="shadow-md w-full p-10 rounded-md border-2 md:w-[40%] flex flex-col gap-4 justify-center items-center text-center"
        >
            <img src={data.image} alt="" />
            <h3 className="text-2xl text-[#1C2752] font-bold">
                {data.heading}
            </h3>
            <p className="text-slate-700 leading-7">{data.desc}</p>
        </div>
    );
}
