import { useEffect, useState } from "react";
import Button, { ButtonSecondary } from "../components/Button";
import Banner from "../components/CaseStudyPage/Banner";
import VideoSection from "../components/CaseStudyPage/VideoSection";
import HandleText from "../components/HandleText";
// import Keyword from "../components/Keyword";
import SectionHeader from "../components/SectionHeader";
import { getHeroSection } from "../api/CaseStudyAPI";

export default function CaseStudyPAGE() {
    let [Heading, setHeading] = useState("");
    let [keyword, setKeyword] = useState("");
    let [Paragraph, setParagraph] = useState("");

    useEffect(() => {
        let fun = async () => {
            let data = await getHeroSection();
            let { Heading, keyword, Paragraph } = data.data.attributes;
            setHeading(Heading);
            setKeyword(keyword);
            setParagraph(Paragraph);
        };
        fun();
    }, []);
    return (
        <>
            <div className="mt-16">
                <SectionHeader
                    keyword={keyword}
                    title={Heading}
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
                        Start free trial
                    </Button>
                    <ButtonSecondary>Be our next success story</ButtonSecondary>
                </div>
            </div>
            <SectionHeader
                keyword={"Stories"}
                title={
                    <HandleText
                        text={"This is why Customers Loves //Locom//"}
                    />
                }
                paragraph={
                    "We know what works, what doesn't and we have helped many local businesses before."
                }
            />
            <VideoSection />
            <Banner />
        </>
    );
}
