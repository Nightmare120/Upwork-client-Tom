// import Stat from "../../images/CaseStudyPageStats.svg";
import Waves from "../../images/CaseStudyPageBackground.png";
import { ButtonWhite } from "../Button";
import { getBanner } from "../../api/CaseStudyAPI";
import { useEffect, useState } from "react";
import { STRAPI_URL } from "../../api/Constant";
import Image from "next/image";

export default function Banner() {
    let [heading, setHeading] = useState("");
    let [paragraph, setParagraph] = useState("");
    let [buttonText, setButtonText] = useState("");
    let [stats, setStats] = useState(null);

    useEffect(() => {
        let fun = async () => {
            let data = await getBanner();
            let { heading, paragraph, buttonText, stats } =
                data.data.attributes;
            setHeading(heading);
            setParagraph(paragraph);
            setButtonText(buttonText);
            setStats(stats);
        };
        fun();
    }, []);
    return (
        <div className="relative mt-16 -left-[2rem] md:-left-[80px] w-[100vw] bg-gradient-to-r to-[#4563FF] from-[#58AFFF]">
            <div
                className="flex flex-col lg:flex-row text-white justify-center items-center gap-8 p-16"
                style={{ backgroundImage: `url('${Waves}')` }}
            >
                <div className="w-full lg:w-[40vw] flex flex-col gap-8 justify-start items-start">
                    <h1 className="text-5xl font-bold ">{heading}</h1>
                    <p>{paragraph}</p>
                    <ButtonWhite>{buttonText}</ButtonWhite>
                </div>
                <div className="w-full lg:w-[60vw]">
                    {stats && (
                        <Image
                            src={STRAPI_URL + stats.data.attributes.url}
                            alt=""
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
