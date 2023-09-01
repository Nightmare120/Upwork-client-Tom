import { useEffect, useState } from "react";
import FAQSection from "../components/AffilatePage/FAQSecton";
import PartnerWithUsSection from "../components/AffilatePage/PartnerWithUS";
import StepsSection from "../components/AffilatePage/StepsSection";
import TestimonialSection from "../components/AffilatePage/TestimonialsSection";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import {
    getBEcomeAffilateSection,
    getFAQSection,
    getHeroSection,
    getStepTextSection,
    getStepsSection,
    getTestimonials,
} from "../api/AffilateAPI";
import HandleText from "../components/HandleText";

export default function AffilatePAGE({
    heroSection,
    stepTextSection,
    stepsSection,
    testimonialSection,
    partnerWithUsSection,
    fAQSection,
}) {
    let [Heading, setHeading] = useState(
        heroSection ? heroSection.heading : ""
    );
    let [buttonText, setButtonText] = useState(
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
            <div className="mt-20 lg:mt-32">
                <div className="w-full md:w-[70vw] m-auto lg:w-[70vw]">
                    <SectionHeader
                        notShowKeyword
                        title={<HandleText text={Heading} />}
                        shouldNotTakeTopMargin
                        paragraph={Paragraph}
                        shouldParaHasShortWidth={true}
                    />
                    <div className="flex gap-4  flex-col md:flex-row md:justify-center md:items-center md:gap-8 mt-8">
                        <Button>{buttonText}</Button>
                    </div>
                </div>
            </div>
            <StepTextSection {...stepTextSection} />

            <StepsSection {...stepsSection} />
            <TestimonialSection {...testimonialSection} />
            <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
                <PartnerWithUsSection {...partnerWithUsSection} />
            </div>
            <FAQSection {...fAQSection} affilate={true} />
        </>
    );
}

function StepTextSection(props) {
    let [heading, setHeading] = useState(props.heading);
    let [paragraph, setParagraph] = useState(props.paragraph);
    let [keyword, setKeyword] = useState(props.keyword);

    useEffect(() => {
        let fun = async () => {
            let Data = await getStepTextSection();
            let { heading, paragraph, keyword } = Data.data.attributes;
            setHeading(heading);
            setParagraph(paragraph);
            setKeyword(keyword);
        };

        fun();
    }, []);
    return (
        <div className="w-full md:w-[85%] m-auto lg:w-[50vw]">
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={heading} />}
                paragraph={paragraph}
            />
        </div>
    );
}

export async function getStaticProps() {
    let data = await getHeroSection();
    let data1 = await getStepTextSection();
    let data2 = await getStepsSection();
    let data3 = await getTestimonials();
    let data4 = await getBEcomeAffilateSection();
    let data5 = await getFAQSection();

    return {
        props: {
            heroSection: {
                ...data.data.attributes,
            },
            stepTextSection: { ...data1.data.attributes },
            stepsSection: data2,
            testimonialSection: data3,
            partnerWithUsSection: { ...data4.data.attributes },
            fAQSection: { ...data5.data.attributes },
        },
    };
}
