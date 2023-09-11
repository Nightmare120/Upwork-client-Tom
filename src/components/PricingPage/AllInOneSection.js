import SectionHeader from "../SectionHeader";
// import Quote from "../../images/Quote.svg";
import { useEffect, useState } from "react";
import { getAllInOneSection } from "../../api/PricingAPI";
// import { useState } from "react";

export default function AllInOne(props) {
    let [heading, setHeading] = useState(props.heading);
    let [keyword, setKeyword] = useState(props.keyword);
    let [data, setData] = useState(props.data);
    let [description, setDescription] = useState(props.description);

    useEffect(() => {
        let fun = async () => {
            let Data = await getAllInOneSection();
            let { heading, keyword, description, data } = Data.data.attributes;
            setHeading(heading);
            setKeyword(keyword);
            setDescription(description);
            setData(data);
        };
        fun();
    }, []);
    return (
        <>
            <SectionHeader
                title={heading}
                paragraph={description}
                keyword={keyword}
            />
            <div className="mt-24 flex gap-8 flex-wrap justify-center">
                {data && data.map((e, index) => <Box key={index} data={e} />)}
            </div>
        </>
    );
}

function Box({ data }) {
    return (
        <div
            style={{}}
            className="shadow-md w-full p-10 rounded-md border-2 md:w-[40%] lg:w-[30%] flex flex-col gap-4 justify-center items-center text-center"
        >
            <img src={data.image} alt="" />
            <h3 className="text-2xl text-[#1C2752] font-bold">
                {data.heading}
            </h3>
            <p className="text-slate-700 leading-7">{data.desc}</p>
        </div>
    );
}
