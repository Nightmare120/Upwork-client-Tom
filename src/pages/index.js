import { useEffect, useState } from "react";
import ExperienceBox from "../components/HomePage/ExperienceBox";
import HeroSection from "../components/HomePage/HeroSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import TrialSection from "../components/HomePage/TrialSection";
import VideoSection from "../components/HomePage/VideoSection";
import WhatYouNeedSection from "../components/HomePage/WhatYouNeedSection";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
// import { NextSeo } from "next-seo";

import {
    getAdvantageSection,
    getHeroSection,
    getHomePageTrialSection,
    getProblemSection,
    getSolutionSection,
    getStepTextSection,
    getSteps,
    getTestimonialSection,
    getVideoSection,
} from "../api/HomePageAPI";
import StepsSection from "../components/HomePage/StepsSection";
import HandleText from "../components/HandleText";
import pattern from "../images/Pattern.svg";
import HandleSeo from "../components/HandleSeo";

export default function HomePAGE({
    heroSection,
    videoSection,
    problemSection,
    solutionSection,
    stepTextSection,
    stepsSection,
    whatYouNeedSection,
    testimonialSection,
    trialSection,
}) {
    return (
        <>
            <HandleSeo seo={heroSection.seo} />
            <HeroSection {...heroSection} />
            <VideoSection {...videoSection} />
            <ProblemSection {...problemSection} />
            <SolutionSection {...solutionSection} />
            <StepTextSection {...stepTextSection} />
            <StepsSection {...stepsSection} />
            <WhatYouNeedSection {...whatYouNeedSection} />
            <TestimonialSection {...testimonialSection} />
            <TrialSection {...trialSection} />
        </>
    );
}

function ProblemSection(props) {
    let [Heading, setHeading] = useState(props.Heading);
    let [keyword, setkeyword] = useState(props.keyword);
    let [Description, setDescription] = useState(props.Description);

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
    return (
        <div className="w-full md:w-[85%] m-auto lg:w-[70vw]">
            <SectionHeader
                keyword={keyword}
                title={<HandleText text={Heading} />}
                paragraph={Description}
            />
            <Image
                src={pattern}
                className="absolute  lg:block hidden sm:block sm:right-5 lg:right-60"
                alt=""
            />
        </div>
    );
}

function SolutionSection(props) {
    let [Heading, setHeading] = useState(props.heading);
    let [Description, setDescription] = useState(props.description);
    let [Data, setData] = useState(props.data);

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
            <ExperienceBox data={Data ? Data : {}} />
        </div>
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
    let data1 = await getVideoSection();
    let data2 = await getProblemSection();
    let data3 = await getSolutionSection();
    let data4 = await getStepTextSection();
    let data5 = await getSteps();
    let data6 = await getAdvantageSection();
    let data7 = await getTestimonialSection();
    let data8 = await getHomePageTrialSection();

    // let { Heading, Description, Stats, Botton_button_text } =
    //     ;
    return {
        props: {
            heroSection: {
                ...data.data.attributes,
            },
            videoSection: { ...data1.data.attributes },
            problemSection: { ...data2.data.attributes },
            solutionSection: { ...data3.data.attributes },
            stepTextSection: { ...data4.data.attributes },
            stepsSection: data5,
            whatYouNeedSection: { ...data6.data.attributes },
            testimonialSection: data7,
            trialSection: { ...data8.data.attributes },
        },
    };
}
