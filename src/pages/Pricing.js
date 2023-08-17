import Button from "../components/Button";
import Keyword from "../components/Keyword";
import SectionHeader from "../components/SectionHeader";
import FAQSection from "../components/AffilatePage/FAQSecton";
import SupportSection from "../components/PricingPage/SupportSection";
import Banner from "../components/PricingPage/Banner";
import AllInOne from "../components/PricingPage/AllInOneSection";
import PricingSection from "../components/PricingPage/PricingSection";
import ToggleButton from "../components/ToggleButton";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import HandleText from "../components/HandleText";
import { useEffect, useState } from "react";
import { getHeroSection } from "../api/PricingAPI";
import StatsBox from "../components/HomePage/StatsBox";

export default function PricingPAGE() {
    let [Heading, setHeading] = useState("");
    let [ButtonText, setButtonText] = useState("");
    let [Paragraph, setParagraph] = useState("");

    useEffect(() => {
        let fun = async () => {
            let data = await getHeroSection();
            let { heading, buttonText, description } = data.data.attributes;
            setHeading(heading);
            setButtonText(buttonText);
            setParagraph(description);
        };
        fun();
    }, []);
    return (
        <>
            <div className="mt-20 lg:mt-32">
                <SectionHeader
                    notShowKeyword
                    title={<HandleText text={Heading} />}
                    shouldNotTakeTopMargin
                    paragraph={Paragraph}
                />
                <div className="flex gap-4  flex-col md:flex-row md:justify-center md:items-center md:gap-8 mt-8">
                    <Button>{ButtonText}</Button>
                </div>
            </div>

            <div className="flex p-8 justify-between mt-16 rounded-lg">
                <div>
                    <p>Our Team Members</p>
                    <p className="w-1/2 text-3xl font-bold text-blue-500">
                        $18k
                    </p>
                    <div className="flex mt-4 gap-4">
                        <StatsBox
                            title={"350+"}
                            detail={"Over 500 business powered with us"}
                        />
                        <StatsBox
                            title={"4.8"}
                            detail={"Rating on google play and app store"}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 items-center">
                        {" "}
                        <span>Monthly</span>
                        <ToggleButton />
                        <span>Annualy</span>
                    </div>
                    <div className="flex gap-8">
                        <span className="text-2xl text-blue-500">208$ / m</span>
                        <span className="bg-gray-300 text-base px-4 py-1 rounded-2xl">
                            Save 20% off
                        </span>
                    </div>
                    <Button>Start 14 day free trial</Button>
                </div>
            </div>
            <PricingSection />
            <TestimonialSection />
            <SupportSection />
            <Banner />
            <AllInOne />
            <FAQSection />
        </>
    );
}
