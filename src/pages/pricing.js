import { useEffect, useState } from "react";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import FAQSection from "../components/AffilatePage/FAQSecton";
import SupportSection from "../components/PricingPage/SupportSection";
import Banner from "../components/PricingPage/Banner";
import AllInOne from "../components/PricingPage/AllInOneSection";
import PricingSection from "../components/PricingPage/PricingSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import HandleText from "../components/HandleText";
import {
    getAllInOneSection,
    getBannerSection,
    getHeroSection,
    getPricingSection,
    getPricingSectionText,
    getPricingSliderSection,
    getSupportSection,
} from "../api/PricingAPI";
import MonthlyAnnualy from "../components/PricingPage/MonthlyAnnualy";
import { getTestimonialSection } from "../api/HomePageAPI";
import HandleSeo from "../components/HandleSeo";

export default function PricingPAGE({
    heroSection,
    monthlyAnnualy,
    pricingSectionData,
    pricingSectionText,
    testimonialSection,
    supportSection,
    banner,
    allInOne,
}) {
    let [Heading, setHeading] = useState(
        heroSection ? heroSection.heading : ""
    );
    let [ButtonText, setButtonText] = useState(
        heroSection ? heroSection.buttonText : ""
    );
    let [Paragraph, setParagraph] = useState(
        heroSection ? heroSection.description : ""
    );
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
            <HandleSeo seo={heroSection.seo} />
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

            <MonthlyAnnualy {...monthlyAnnualy} />
            <div className="border-b-2 w-full h-2"></div>
            <PricingSection
                pricingSectionData={pricingSectionData}
                {...pricingSectionText}
            />
            <TestimonialSection data={testimonialSection} />
            <SupportSection {...supportSection} />
            <Banner {...banner} />
            <AllInOne {...allInOne} />
            <FAQSection />
            <div className="flex flex-col justify-center items-center gap-4 my-16">
                <Button
                    onClick={() => {
                        window.location =
                            "https://8okzn8zrvfp.typeform.com/to/CGtW7ylQ";
                    }}
                >
                    Start 7-day free trial
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

export async function getStaticProps() {
    let data = await getHeroSection();
    let data1 = await getPricingSliderSection();
    let data3 = await getPricingSection();
    let data4 = await getPricingSectionText();
    let data5 = await getTestimonialSection();
    let data6 = await getSupportSection();
    let data7 = await getBannerSection();
    let data8 = await getAllInOneSection();

    return {
        props: {
            heroSection: {
                ...data.data.attributes,
            },
            monthlyAnnualy: { ...data1.data.attributes },
            pricingSectionData: data3.data,
            pricingSectionText: { ...data4.data.attributes },
            testimonialSection: data5.data,
            supportSection: { ...data6.data.attributes },
            banner: { ...data7.data.attributes },
            allInOne: { ...data8.data.attributes },
        },
    };
}
