import { useEffect, useState } from "react";
import FAQSection from "../components/AffilatePage/FAQSecton";
import PartnerWithUsSection from "../components/AffilatePage/PartnerWithUS";
import StepsSection from "../components/AffilatePage/StepsSection";
import TestimonialSection from "../components/AffilatePage/TestimonialsSection";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { getHeroSection, getStepTextSection } from "../api/AffilateAPI";
import HandleText from "../components/HandleText";

export default function AffilatePAGE() {
    let [Heading, setHeading] = useState("");
    let [buttonText, setButtonText] = useState("");
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
            <StepTextSection />

            <StepsSection />
            <TestimonialSection />
            <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
                <PartnerWithUsSection />
            </div>
            <FAQSection affilate={true} />
        </>
    );
}

function StepTextSection() {
    let [heading, setHeading] = useState("");
    let [paragraph, setParagraph] = useState("");
    let [keyword, setKeyword] = useState();

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
