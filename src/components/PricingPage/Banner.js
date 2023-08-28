import { ButtonWhite } from "../Button";
import Background from "../../images/PrcingBannerBackground.svg";
import { useEffect, useState } from "react";
import { getBannerSection } from "../../api/PricingAPI";

export default function Banner() {
    let [buttonText, setButtonText] = useState("");
    let [heading, setHeading] = useState("");

    useEffect(() => {
        let fun = async () => {
            let data = await getBannerSection();
            let { heading, buttonText } = data.data.attributes;
            setHeading(heading);
            setButtonText(buttonText);
        };
        fun();
    }, []);
    return (
        <div className="bg-[#007BFF] mt-16  rounded-lg w-full text-white">
            <div
                style={{ backgroundImage: `url('${Background}')` }}
                className="flex flex-col md:flex-row p-8 py-16 gap-8 justify-center items-center w-full"
            >
                <h1 className="text-3xl md:w-1/2">{heading}</h1>
                <ButtonWhite
                    onClick={() => {
                        window.location =
                            "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                    }}
                >
                    {buttonText}
                </ButtonWhite>
            </div>
        </div>
    );
}
