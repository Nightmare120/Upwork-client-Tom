import { useEffect, useState } from "react";
import ExperienceBox from "../components/HomePage/ExperienceBox";
import HeroSection from "../components/HomePage/HeroSection";
// import StepBox from "../components/HomePage/StepBox";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import TrialSection from "../components/HomePage/TrialSection";
import VideoSection from "../components/HomePage/VideoSection";
import WhatYouNeedSection from "../components/HomePage/WhatYouNeedSection";
// import Keyword from "../components/Keyword";
import SectionHeader from "../components/SectionHeader";
// import Step1 from "../images/Step1.png";
// import Step2 from "../images/Step2.png";
// import Step3 from "../images/Step3.png";
// import Step4 from "../images/Step4.png";
// import Step5 from "../images/Step5.png";
// import Step6 from "../images/Step6.png";
import {
    getProblemSection,
    getSolutionSection,
    getStepTextSection,
} from "../api/HomePageAPI";
import StepsSection from "../components/HomePage/StepsSection";
import HandleText from "../components/HandleText";
import pattern from "../images/Pattern.svg";

export default function HomePAGE() {
    return (
        <>
            <HeroSection />
            <VideoSection />
            <ProblemSection />
            <SolutionSection />
            <StepTextSection />
            <StepsSection />
            <WhatYouNeedSection />
            <TestimonialSection />
            <TrialSection />
        </>
    );
}

function ProblemSection() {
    let [Heading, setHeading] = useState("");
    let [keyword, setkeyword] = useState("");
    let [Description, setDescription] = useState("");

    useEffect(() => {
        let fun = async () => {
            let data = await getProblemSection();
            let { Heading, Description, keyword } = data.data.attributes;
            setHeading(Heading);
            setDescription(Description);
            setkeyword(keyword);
        };

        fun();
    }, []);
    console.log(pattern);
    return (
        <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={Heading} />}
                paragraph={Description}
            />
            <img
                src={pattern}
                className="absolute -mt-30 lg:block hidden sm:block sm:right-5 lg:right-36"
                alt=""
            />
        </div>
    );
}

function SolutionSection() {
    let [Heading, setHeading] = useState("");
    let [Description, setDescription] = useState("");
    let [Data, setData] = useState({});

    useEffect(() => {
        let fun = async () => {
            let Data = await getSolutionSection();
            let { heading, description, data } = Data.data.attributes;
            setHeading(heading);
            setDescription(description);
            setData(data);
        };

        fun();
    }, []);
    return (
        <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
            <SectionHeader
                keyword={"Solution"}
                title={<HandleText text={Heading} />}
                paragraph={Description}
            />
            <ExperienceBox data={Data} />
        </div>
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
        <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={heading} />}
                paragraph={paragraph}
            />
        </div>
    );
}
