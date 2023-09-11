import { useEffect, useState } from "react";
import HandleText from "../HandleText";
import SectionHeader from "../SectionHeader";
import PriceBox from "./PriceBox";
import { getPricingSection, getPricingSectionText } from "../../api/PricingAPI";

export default function PricingSection(props) {
    let [data, setData] = useState(props.pricingSectionData);
    let [keyword, setKeyword] = useState(props.heading);
    let [paragraph, setParagraph] = useState(props.paragraph);
    let [heading, setHeading] = useState(props.keyword);

    useEffect(() => {
        let func = async () => {
            let res = await getPricingSection();
            let res1 = await getPricingSectionText();
            let { heading, paragraph, keyword } = res1.data.attributes;
            setHeading(heading);
            setParagraph(paragraph);
            setKeyword(keyword);
            setData(res.data);
        };
        func();
    }, []);

    return (
        <div className="mt-16">
            <div className="w-full m-auto lg:w-[50vw]">
                <SectionHeader
                    shouldNotTakeTopMargin
                    keyword={keyword}
                    title={HandleText({
                        text: heading,
                    })}
                    paragraph={paragraph}
                />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-16 justify-center   md:px-8 mt-24">
                {data &&
                    data.map((e, index) => (
                        <PriceBox key={index} data={e.attributes} />
                    ))}
            </div>
        </div>
    );
}
