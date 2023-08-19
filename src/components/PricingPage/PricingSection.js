import { useEffect, useState } from "react";
import HandleText from "../HandleText";
import SectionHeader from "../SectionHeader";
import PriceBox from "./PriceBox";
import { getPricingSection } from "../../api/PricingAPI";

export default function PricingSection() {
    let [data, setData] = useState(null);
    useEffect(() => {
        let func = async () => {
            let res = await getPricingSection();
            setData(res.data);
        };
        func();
    }, []);
    return (
        <>
            <SectionHeader
                keyword={"Pricing"}
                title={HandleText({
                    text: "We know, the //only thing// that matters is results.",
                })}
                paragraph={`Therefore 1.5k+ companies are using Locom to supercharge their automated referral game.

            The question is, when will you?`}
            />
            <div className="flex flex-wrap lg:flex-nowrap gap-16 px-8 mt-16">
                {data &&
                    data.map((e, index) => (
                        <PriceBox key={index} data={e.attributes} />
                    ))}
            </div>
        </>
    );
}