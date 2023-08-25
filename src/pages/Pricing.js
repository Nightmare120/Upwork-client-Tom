import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import FAQSection from "../components/AffilatePage/FAQSecton";
import SupportSection from "../components/PricingPage/SupportSection";
import Banner from "../components/PricingPage/Banner";
import AllInOne from "../components/PricingPage/AllInOneSection";
import PricingSection from "../components/PricingPage/PricingSection";
// import ToggleButton from "../components/ToggleButton";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import HandleText from "../components/HandleText";
import { useEffect, useState } from "react";
import { getHeroSection } from "../api/PricingAPI";
// import OurTeam from "../components/PricingPage/OurTeam";
import MonthlyAnnualy from "../components/PricingPage/MonthlyAnnualy";

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
                <div className="w-full md:w-[85vw] m-auto lg:w-[50vw]">
                    <SectionHeader
                        notShowKeyword
                        title={<HandleText text={Heading} />}
                        shouldNotTakeTopMargin
                        paragraph={Paragraph}
                    />
                    <div className="flex gap-4  flex-col md:flex-row md:justify-center md:items-center md:gap-8 mt-8">
                        <Button
                            onClick={() => {
                                window.location =
                                    "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                            }}
                        >
                            {ButtonText}
                        </Button>
                    </div>
                </div>
            </div>

            <MonthlyAnnualy />
            <div className="border-b-2 w-full h-2"></div>
            <PricingSection />
            <TestimonialSection />
            <SupportSection />
            <Banner />
            <AllInOne />
            <FAQSection />
            <div className="flex flex-col justify-center items-center gap-4 my-16">
                <Button
                    onClick={() => {
                        window.location =
                            "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                    }}
                >
                    Start 7-days free trial
                </Button>
                <p
                    className="text-center 
underline text-slate-700 "
                >
                    30-Day Money Back Guarantee
                </p>
            </div>
        </>
    );
}
